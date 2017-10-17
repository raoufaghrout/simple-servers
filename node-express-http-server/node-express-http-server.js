var express = require('express')
var app = express();

app.get('/', function(res, res) {
  res.type('text/plain').send('Hello World\n');
});

app.listen(1234);
