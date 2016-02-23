'use strict';
var express     = require('express');

var app = express();

//configure for middleware and routing
require('./server/server.js')(app, express);

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Listening on ' + port);

module.exports = app;