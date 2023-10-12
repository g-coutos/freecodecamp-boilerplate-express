let express = require('express');
let app = express();

/*
ex. 1
console.log('Hello World');
*/ 

app.get('/', function(req, res) {
  res.send('Response String');
});

module.exports = app;
