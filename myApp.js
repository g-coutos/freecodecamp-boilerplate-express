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

/* 
ex. 3
app.get('/', function(req, res) {
  res.sendFile('/views/index.html', { root: __dirname });
});
*/

app.get('/public', function(req, res) {
  res.sendFile('/views/index.html', { root: __dirname });
});

app.use('/public', express.static(`${__dirname}/public`));

module.exports = app;
