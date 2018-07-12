console.log('Hi!');

const { Client } = require('pg');
const connectionString = 'postgres://omcimpmwikduab:3c5b2b0bf91c0dca2f93626a89858b22a0d14050922a53991e465a53239c1800@ec2-184-72-219-186.compute-1.amazonaws.com:5432/d36mka4pj1qtt1';
const client = new Client({
  connectionString: connectionString,
});

client.connect();

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  // client.end()
});


var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
  
  res.send('API:\n' +
    'GET users\n' +
    'POST users {name: \'Anton\'}\n' +
    '\n' +
    'GET channels/:channel_id/messages\n' +
    'POST messages {text: \'Message example\', user_id: 1, object_of_concern_id: 1}\n' +
    '\n' +
    'GET users/:user_id/active-channels\n' +
    'GET channels/:channel_id/object-of-concern\n' +
    '\n' +
    'POST objects_of_concern {uri: \'/buildings/white-garden\', image_url: \'https://s3.aws.com/aeuacaea.jpg\', name: \'White Garden\'}\n' +
    '\n');
});

client.query('CREATE TABLE IF NOT EXISTS users(id integer not null, name varchar, PRIMARY KEY (id))');

// API:
// GET users
app.get('/users', function (req, res1) {

  client.query('SELECT * from users', (err, res2) => {
    res1.send(JSON.stringify(res2.rows));
  });
});
// POST users {name: 'Anton'}
//
// GET channels/:channel_id/messages
// POST messages {text: 'Message example', user_id: 1, object_of_concern_id: 1}
//
// GET users/:user_id/active-channels
// GET channels/:channel_id/object-of-concern
//
// POST objects_of_concern {uri: '/buildings/white-garden', image_url: 'https://s3.aws.com/aeuacaea.jpg', name: 'White Garden'}
//




app.listen(process.env.PORT || 5000);