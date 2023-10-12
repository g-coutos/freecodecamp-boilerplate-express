let express = require('express');
let app = express();

/*
ex. 1
console.log('Hello World');
*/ 

app.get('/', function(req, res) {
  res.send('Hello Express');
});

module.exports = app;
