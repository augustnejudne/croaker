// NPM MODULES
const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const mongoose = require('mongoose');

// DB INITS
require('./db/db.js')(mongoose);
require('./models/croaker.model.js')(mongoose);
require('./models/croak.model.js')(mongoose);

// INITIALIZE
const app = express();


// CONFIGS
require('dotenv').config();
require('./services/passport.service.js')(passport, FacebookStrategy, GoogleStrategy, mongoose);
const PORT = process.env.PORT;

// MIDDLWARE
// !IMPORTANT! You have to use expressSession before passport.initialize and passport.session
app.use(bodyParser.json());
app.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
require('./routes/routes.js')(app);
require('./routes/api/auth.routes.js')(app, passport);
// require('./routes/api/profile.routes.js')(app, mongoose);
require('./routes/api/croaks.routes.js')(app, mongoose);


// APP LISTEN
app.listen(PORT, () => {
  console.log('\n###############################\n');
  console.log(`listening on port ${PORT}`);
  console.log('\n###############################\n');
});

module.exports = app;