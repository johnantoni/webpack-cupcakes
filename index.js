var express = require('express');
var app = express();

var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // clear mongo's promise depreciation warning : https://github.com/Automattic/mongoose/issues/4291
// mongoose.connect('mongodb://localhost/cupcakes');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/cupcakes')

// add bluebird
var Promise = require("bluebird");

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));

// Serve bundle.js
app.use(webpackMiddleware(webpack(require('./webpack.config.js'))));

// Serve your API assets here. You'll need to include the post route file.
app.use(express.static('public'));

// Serve your static assets here. You'll need to use express.static middleware.
app.use('/api/cakes', require('./api/cakes'));
app.use('/api/cart', require('./api/cart'));
app.use('/api/orders', require('./api/orders'));
require('./api/users/model');


var passport = require('passport');
var User = require('./api/users/model');
passport.use(User.createStrategy());

app.post('/api/login', passport.authenticate('local'), function(req, res) {
  res.send(req.user)
})

app.use(require('express-session')({ secret: '657gfdue9032849339f', resave: false, saveUninitialized: true }));

app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post('/api/signup', function(req, res, next) {
  var user = new User();
  user.email = req.body.email;
  user.name = req.body.name;
  User.register(user, req.body.password, function(err) {
    if (err) { next(err); }
    req.login(user, function(err) {
      if (err) { next(err); }
      res.send(user);
    })
  })
});
// If none of the above matches, serve public/index.html.
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(process.env.PORT || 3000);
