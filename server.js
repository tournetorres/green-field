const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const GoogleAuth = require('google-auth-library');
const request = require('request-promise');

const app = express();

const PORT = process.env.PORT;
const DB = process.env.DB || 'localhost';

const connection = mysql.createConnection({
  host: DB,
  user: 'root',
  password: '',
  database: 'petdetective',
});

const auth = new GoogleAuth();
const client = new auth.OAuth2('1036579880288-7vaoh4gg8d0hhapkcuummk2pvqpu1sf0.apps.googleusercontent.com', '', '');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection.connect((err) => {
  if (!err) {
    console.log('Database is connected ... nn');
  } else {
    console.error('Error connecting database ... nn', err);
  }
});

app.listen(PORT, () => console.log('listening on', PORT));

const userInfo = {
  currentUser: '',
  photo: '',
};

app.get('/bulletin', (req, res) => {
  connection.query('select * from petpost', (err, rows, fields) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

app.post('/bulletin', (req, res) => {
  connection.query(`insert into petpost (lostOrFound, type, address, message, date, latlong, user, userpic, petPic) values ('${req.body.lostOrFound}', '${req.body.type}', '${req.body.address}', '${req.body.message}', '${req.body.date}', '${req.body.latlong}', '${req.body.user}', '${req.body.userpic}', '${req.body.petPic}')`, function(err, rows, fields) {
    if (err) {
      console.error(err);
    } else {
      console.log('Your post has been submitted');
    }
  });
  res.sendStatus(201);
});
app.post('/search', (req, res) => {
  console.log(req.body.searchField, 'should be SEARCH field');
  connection.query(`select * from petpost where address like '%${req.body.searchField}%' or message like '%${req.body.searchField}%'`, function(err, rows, fields){
    if (err) {
      res.send(err);
    } else {
      console.log(rows, 'in search');
      res.send(rows);
    }
  });
});

app.post('/tokensignin', function (req, res) {
  client.verifyIdToken(
    req.body.idtoken,
    '1036579880288-7vaoh4gg8d0hhapkcuummk2pvqpu1sf0.apps.googleusercontent.com',
    // Or, if multiple clients access the backend:
    // [CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
    function (e, login) {
      let token;
      const payload = login.getPayload();
      userInfo.currentUser = payload.email;
      userInfo.photo = payload.picture;
      console.log(payload, 'payload')
      if (payload) {
        token = jwt.sign(payload, process.env.MY_SECRET);
      }
      connection.query(`select * from users where email = '${payload.email}'`, (err, data) => {
        if (!data.length) {
          connection.query(`insert into users (email, picture, first_name, last_name) values ('${payload.email}','${payload.picture}','${payload.given_name}','${payload.family_name}')`);
          res.status(200).send(token);
        } else {
          res.status(200).send(token);
        }
      });
      // If request specified a G Suite domain:
      // var domain = payload['hd'];
    });
});

app.post('/deletePost', (req, res) => {
  // console.log(req.body, 'deleted body');
  connection.query(`select * from petpost where user='${req.body.user}' and message='${req.body.message}'`, (err, data) => {
    if(err){console.error(err)}
    if (data.length) {
      connection.query(`DELETE from petpost where user='${req.body.user}' and message='${req.body.message}'`);
      res.send(data);
    } else {
      res.end();
    }
  });
});

