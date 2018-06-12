"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
//import {DataAccess} from './DataAccess';
var RecipeModel_1 = require("./model/RecipeModel");
var RecipeCatalogModel_1 = require("./model/RecipeCatalogModel");
var RecipeCatalogDetailsModel_1 = require("./model/RecipeCatalogDetailsModel");
var UserModel_1 = require("./model/UserModel");
var GooglePassport_1 = require("./GooglePassport");
var passport = require('passport');
var fs = require('fs');
var cors = require('cors');
var max = 500;
var min = 8;
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.googlePassportObj = new GooglePassport_1["default"]();
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = Math.floor(Math.random() * (max - min) + min);
        this.Recipes = new RecipeModel_1.RecipeModel();
        this.RecipesCatalog = new RecipeCatalogModel_1.RecipeCatalogModel();
        this.RecipeCatalogDetails = new RecipeCatalogDetailsModel_1.RecipeCatalogDetailsModel();
        this.User = new UserModel_1.UserModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(passport.initialize());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(passport.session({ secret: 'keyboard cat' }));
        this.expressApp.use(passport.session());
    };
    App.prototype.validateAuth = function (req, res, next) {
        if (req.isAuthenticated()) {
            console.log("user is authenticated");
            return next();
        }
        console.log("user is not authenticated");
        res.redirect('/');
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.use(cors());
        router.options('*', cors());
        //oauth
        router.get('/auth/google', cors(), passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.me', 'email'] }));
        router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/', successRedirect: 'http://localhost:4200/#/allrecipes' }));
        // router.get('/auth/google',
        //             passport.authenticate('google',
        //                 { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }
        //             ), (res, req) => {
        //             console.log(req);
        //             }
        //         );
        //         router.get('/auth/google/callback',
        //             passport.authenticate('google',
        //                 { successRedirect: '/#/allrecipes', failureRedirect: '/'
        //                 }
        //             ), function(res, req) {
        //                 console.log("2RES:" + res);
        //                 console.log("2REQ:" + req);
        //             }
        //         );
        router.get('/auth/userdata', this.validateAuth, function (req, res) {
            console.log('user object:' + JSON.stringify(req.user));
            _this.username = JSON.stringify(req.user);
            res.json(req.user);
        });
        // router.post('/app/recipe/:recipeID', (req, res) => {
        //     var id = req.params.recipeID;
        //     console.log('Query changed single list with id: ' + id);
        //     this.Recipes.model.update([id], (err) => {
        //         if (err) {
        //             console.log('Recipe updation failed');
        //         }
        //     }); 
        //     res.send({ message: 'Recipe updated!' });
        // });
        router["delete"]('/app/recipe/:recipeID', function (req, res) {
            var id = req.params.recipeID;
            console.log('Query single recipe with id: ' + id);
            _this.Recipes.DeleteRecipe(res, { rrecipeId: id });
        });
        router.post('/app/recipe/', function (req, res) {
            console.log("Inside Post");
            var jsonObj = req.body;
            jsonObj.rrecipeId = _this.idGenerator++;
            console.log("id..." + jsonObj.rrecipeId);
            _this.Recipes.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send({ message: 'Recipe created!' });
            _this.idGenerator++;
        });
        router.get('/app/recipe/', function (req, res) {
            console.log('Query All Recipes');
            _this.Recipes.retrieveAllRecipes(res);
        });
        router.get('/app/recipe/:recipeID', function (req, res) {
            var id = req.params.recipeID;
            console.log('Query single recipe with id: ' + id);
            _this.Recipes.retrieveRecipeDetails(res, { rrecipeId: id });
        });
        router.get('/app/catalog', function (req, res) {
            console.log('Query All Recipe catalog');
            _this.RecipesCatalog.retrieveAllCatalog(res);
        });
        router.get('/app/catalog/:recipeCatalogDetails', function (req, res) {
            var id = req.params.recipeCatalogDetails;
            console.log('Query single recipe with catalog: ' + id);
            _this.RecipeCatalogDetails.retrieveRecipeCatalogDetails(res, { rcId: id });
        });
        router.get('/app/catalog/1/:rmealtype', function (req, res) {
            var id = req.params.rmealtype;
            console.log('Query single user with mealtype: ' + id);
            _this.Recipes.retrieveRecipeDetailsByCatalogue(res, { rmealtype: id });
        });
        router.get('/app/catalog/2/:rcuisinetype', function (req, res) {
            var id = req.params.rcuisinetype;
            console.log('Query single user with cuisinetype: ' + id);
            _this.Recipes.retrieveRecipeDetailsByCatalogue(res, { rcuisinetype: id });
        });
        router.get('/app/catalog/3/:rmealpreference', function (req, res) {
            var id = req.params.rmealpreference;
            console.log('Query single user with mealpreference: ' + id);
            _this.Recipes.retrieveRecipeDetailsByCatalogue(res, { rmealpreference: id });
        });
        router.get('/app/user/username/:usernames', function (req, res) {
            var id = req.params.usernames;
            console.log('Query single user with username: ' + id);
            _this.User.retrieveUserDetails(res, { username: id });
        });
        router.post('/app/user/', function (req, res) {
            console.log("Inside node server User Post");
            var jsonObj = req.body;
            _this.idGenerator = Math.floor(Math.random() * (max - min) + min);
            jsonObj.userId = _this.idGenerator++;
            console.log("id..." + jsonObj.userId);
            // jsonObj.username = id;
            //console.log("username..."+jsonObj.userId);
            _this.User.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send({ message: 'New User created!' });
            _this.idGenerator++;
        });
        router.get('/app/all/users/', function (req, res) {
            console.log('Query All Users');
            _this.User.retrieveAllUsers(res);
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/recipeAngularDist'));
        // this.expressApp.use('/', express.static(__dirname+'/pages'));
    };
    return App;
}());
exports.App = App;
