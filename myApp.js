let express = require('express');
let app = express();

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

app.get('/', function(req, res) {
  res.sendFile('/views/index.html', { root: __dirname });
});

module.exports = app;
