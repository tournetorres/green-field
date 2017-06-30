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
  connection.query(`select * from petpost`);
  res.send(200);
});

app.post('/bulletin', function(req, res) {
  connection.query(`insert into petpost (lostOrFound, type, address, message) values ('${req.body.lostOrFound}','${req.body.type}', '${req.body.address}', '${req.body.message}')`);
  res.sendStatus(201);
});

