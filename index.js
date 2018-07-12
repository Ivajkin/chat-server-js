console.log('Hi!');

const { Client } = require('pg');
const connectionString = 'postgres://omcimpmwikduab:3c5b2b0bf91c0dca2f93626a89858b22a0d14050922a53991e465a53239c1800@ec2-184-72-219-186.compute-1.amazonaws.com:5432/d36mka4pj1qtt1';
const client = new Client({
  connectionString: connectionString,
});

client.connect();

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
});


var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 5000);