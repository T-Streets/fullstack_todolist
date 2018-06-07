const express = require('express');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/user');

mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app);
const app = express();


const PORT = process.env.PORT || 5000;
app.listen(PORT);