let express = require('express');
let app = express();

require('dotenv').config()

/*
ex. 1
console.log('Hello World');
*/ 

/* 
ex.2
app.get('/', function(req, res) {
  res.send('Hello Express');
});
*/

/* 
ex. 3
app.get('/', function(req, res) {
  res.sendFile('/views/index.html', { root: __dirname });
});
*/

/*
ex. 4
app.get('/public', function(req, res) {
  res.sendFile('/views/index.html', { root: __dirname });
});

app.use('/public', express.static(`${__dirname}/public`));
*/

/*
ex. 5
app.get('/json', function(req, res) {
  res.json({ "message": "Hello json" });
});
*/

/*
ex. 6
function uppercase(env) {
  let message = 'Hello json';

  if (env == 'uppercase') {
    return message.toUpperCase();
  } 

  return message;
}

app.get('/json', function(req, res) {
  res.json({ message: uppercase(process.env.MESSAGE_STYLE) });
});
*/

app.get('/json', function(req, res, next) {
  let message = `${req.method} ${req.path} - ${req.ip}`;

  console.log(message);

  next();
});

module.exports = app;
