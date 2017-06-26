const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'petdetective',
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client'));

app.use(express.static('client'));

connection.connect((err) => {
  if (!err) {
    console.log('Database is connected ... nn');
  } else {
    console.error('Error connecting database ... nn');
  }
});

app.listen(PORT, () => console.log('listening on', PORT));

