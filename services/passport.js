const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');


/**
 * serializes mongoID on user to be set into cookie
 */
passport.serializeUser((user, done) => {
    done(null, user.id);
})


 /**
  * deserializes id from cookie to verify user in DB
  */
passport.deserializeUser((id, done)=> {
    User.findById(id)
    .then(user => {
        done(null, user)
    })
})


/**
 * Configures project credentials for google OAuth
 * Checks to see if user already exists in DB,
 * if not, creates new user
 */
passport.use( new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
    async (accessToken, refreshToken, profile, done)  => {
        const existingUser = await User.findOne({googleId: profile.id})
            if(existingUser) {
                return done(null, existingUser);
            }  
            const user = await new User({googleId: profile.id}).save()
            done(null, user)
            
        }    
))