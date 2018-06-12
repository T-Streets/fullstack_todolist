const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
require('./routes/authRoutes')(app);

/**
 * sets max age of cookie and encrypts it
 */
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //30days
        keys: [keys.cookieKey]
    })
);

/**
 * initializes cookies to handle authentication
 */
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;
app.listen(PORT);