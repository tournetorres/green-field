const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;
const DB = process.env.DB || 'localhost';
const connection = mysql.createConnection({
  host: DB,
  user: 'root',
  password: '',
  database: 'petdetective',
});

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

app.get('/bulletin', function(req, res) {
  connection.query(`select * from petpost`, function(err, rows, fields) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

app.post('/bulletin', function(req, res) {
  connection.query(`insert into petpost (lostOrFound, type, address, message) values ('${req.body.lostOrFound}','${req.body.type}', '${req.body.address}', '${req.body.message}')`, function(err, rows, fields) {
    if (err) {
      console.error(err);
    } else {
      console.log('Your post has been submitted');
    }
  });
  res.sendStatus(201);
});

