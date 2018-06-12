import googleAppAuth from './googleOauth2';
import googleOauth2 from './googleOauth2';

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//var cors = require('cors');
// Creates a Passport configuration for Google
class GooglePassport {

    userId: string;
    displayName: string;
    email: string;
    clientId: string;
    secretId: string;
    
    constructor() {
        this.clientId = googleAppAuth.id;
        this.secretId = googleAppAuth.secret;
        //let router = express.Router();

    //passport.use(cors());
    //passport.options('*',cors());
        passport.use(new GoogleStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                callbackURL: "/auth/google/callback", 
                profileFields: ['id', 'displayName', 'emails']
            }
            ,
            (accessToken, refreshToken, profile, done) => {
                process.nextTick( () => {
                    console.log('validating Google profile:' + JSON.stringify(profile));
                    this.userId = profile.id;
                    this.displayName = profile.displayName;
                    this.email = profile.emails[0].value;
                    return done(null, profile);
                });
            },
            function(req, res, next) {res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        }
        ));

        passport.serializeUser(function(user, done) {
            done(null, user);
        });

        passport.deserializeUser(function(user, done) {
            done(null, user);
        });
    }
}
export default GooglePassport;