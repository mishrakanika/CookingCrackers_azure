"use strict";
exports.__esModule = true;
var googleOauth2_1 = require("./googleOauth2");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//var cors = require('cors');
// Creates a Passport configuration for Google
var GooglePassport = /** @class */ (function () {
    function GooglePassport() {
        var _this = this;
        this.clientId = googleOauth2_1["default"].id;
        this.secretId = googleOauth2_1["default"].secret;
        //let router = express.Router();
        //passport.use(cors());
        //passport.options('*',cors());
        passport.use(new GoogleStrategy({
            clientID: this.clientId,
            clientSecret: this.secretId,
            callbackURL: "/auth/google/callback",
            profileFields: ['id', 'displayName', 'emails']
        }, function (accessToken, refreshToken, profile, done) {
            process.nextTick(function () {
                console.log('validating Google profile:' + JSON.stringify(profile));
                _this.userId = profile.id;
                _this.displayName = profile.displayName;
                _this.email = profile.emails[0].value;
                return done(null, profile);
            });
        }, function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        }));
        passport.serializeUser(function (user, done) {
            done(null, user);
        });
        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }
    return GooglePassport;
}());
exports["default"] = GooglePassport;
