var dotenv      = require('dotenv')();
dotenv.load();

var e           = module.exports;
e.ENV           = process.env.NODE_ENV || 'development';

var sendgrid_username   = process.env.SENDGRID_USERNAME;
var sendgrid_password   = process.env.SENDGRID_PASSWORD;

sendgrid    = require('sendgrid')(sendgrid_username, sendgrid_password);

var port        = parseInt(process.env.PORT) || 3000;
var Hapi        = require('hapi');
server          = new Hapi.Server(+port, '0.0.0.0', { cors: true });
require('./routes');
server.start(function() {
  console.log('Server started at: ' + server.info.uri);
});

