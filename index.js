const express = require('express');
const app = express();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('./services/passport');

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);