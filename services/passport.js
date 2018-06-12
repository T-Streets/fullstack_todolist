const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

/**
 * Configures project credentials for google OAuth
 * Checks to see if user already exists in DB,
 * if not, creates new user
 */
passport.use( new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
  },
    (accessToken, refreshToken, profile, done)  => {
        User.findOne({googleId: profile.id})
            .then((existingUser) => {
                if(existingUser) {
                    done(null, existingUser);
                } else {    
                  new User({googleId: profile.id})
                  .save()
                  .then(user => {
                    done(null, user)
                  })}
            })
    }
))