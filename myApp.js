require('dotenv').config();

let express = require('express');
let app = express();

let bp = require('body-parser');

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

/*
ex. 7
app.get('/json', function(req, res, next) {
  let message = `${req.method} ${req.path} - ${req.ip}`;

  console.log(message);

  next();
});
*/

/*
ex. 8
app.get(
  '/now', 
  function(req, res, next) {
    req.time = new Date().toString();

    next();
  },

  function(req, res) {
    res.json({ time: req.time });
  }  
);
*/

/*
ex. 9
app.get('/:word/echo', function(req, res) {
  res.json({ echo: req.params.word });
});
*/

/*
ex. 10
app.get('/name',  function(req, res) {
  res.json({ name: `${req.query.first} ${req.query.last}` });
});
*/

/*
ex. 11
app.use(bp.urlencoded({ extended: true }));
*/

app.get('/public', function(req, res) {
  res.sendFile('/views/index.html', { root: __dirname });
});

app.use('/public', express.static(`${__dirname}/public`));

app.use(bp.urlencoded({ extended: true }));

app.route('/name')
  .post(
    function(req, res) {
      req.name = `${req.body.first} ${req.body.last}`;

      res.json({ name: req.name });
    }
  );

module.exports = app;
