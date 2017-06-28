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

app.post('/bulletins', function(req, res) {
  console.log(req.body.config);
  res.send(200);
});
