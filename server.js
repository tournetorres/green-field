const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

const PORT = process.env.PORT;
const DB = process.env.DB || 'localhost';
const connection = mysql.createConnection({
  host: DB,
  user: 'root',
  password: '',
  database: 'petdetective',
});
const GoogleAuth = require('google-auth-library');

const jwt = require('jsonwebtoken');

const auth = new GoogleAuth;
const client = new auth.OAuth2('673527265143-l8gvqn8e0qcm4o23nf914sd9hp0tj82c.apps.googleusercontent.com', '', '');

app.use(express.static('client'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

connection.connect((err) => {
  if (!err) {
    console.log('Database is connected ... nn');
  } else {
    console.error('Error connecting database ... nn');
  }
});

app.listen(PORT, () => console.log('listening on', PORT));

app.get('/bulletin', function (req, res) {
  connection.query(`select * from petpost`);
  res.send(200);
});

app.post('/bulletin', function (req, res) {
  connection.query(`insert into petpost (lostOrFound, type, address, message) values ('${req.body.lostOrFound}','${req.body.type}', '${req.body.address}', '${req.body.message}')`);
  res.sendStatus(201);
});

app.post('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/login.html'));
});

app.post('/tokensignin', function (req, res) {
  client.verifyIdToken(
    req.body.idtoken,
    '673527265143-l8gvqn8e0qcm4o23nf914sd9hp0tj82c.apps.googleusercontent.com',
    // Or, if multiple clients access the backend:
    // [CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
    function (e, login) {
      let token;
      const payload = login.getPayload();
      // const userid = payload['sub'];
      if (payload) {
        token = jwt.sign(payload, process.env.MY_SECRET);
      }
      connection.query(`insert into users (email, picture) values ('${payload.email}','${payload.picture}')`);
      // res.status(200).send(token);
      res.sendFile(path.join(__dirname, 'client/index.html'));

      // If request specified a G Suite domain:
      // var domain = payload['hd'];
    });
// make access token my own give it a secret, hash it give it to client-side
// check in the request header for Authorization the value should be Bearer and
// the correct hash of access token
});
