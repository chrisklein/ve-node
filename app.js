
/**
 * Module dependencies.
 */

var express = require('express')
  , request = require('request')
  , _ = require('underscore')
  , jsdom = require('jsdom')
  , routes = require('./routes')
  , devices = require('./routes/devices')
  , users = require('./routes/users')
  , deviceOrigins = require('./routes/device_origin')
  , api = require('./routes/api')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/devices', devices.index);
app.get('/devices/:id', devices.show);
app.get('/tendril',devices.tendril);
app.get('/users', users.index);
app.get('/users/:id', users.show);
app.get('/deviceorigins', deviceOrigins.index);
app.get('/deviceorigins/:id', deviceOrigins.show);
app.get('/api/person', api.index);
app.get('/api/person/:id', api.person);
app.get('/api/server', api.server);
app.get('/api/client', api.client);
app.get('/api/api', api.client);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
