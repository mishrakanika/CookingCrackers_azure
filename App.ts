import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';


//import {DataAccess} from './DataAccess';
import {RecipeModel} from './model/RecipeModel';
import {RecipeCatalogModel} from './model/RecipeCatalogModel';
import {RecipeCatalogDetailsModel} from './model/RecipeCatalogDetailsModel';
import {UserModel} from './model/UserModel';

import GooglePassportObj from './GooglePassport';

let passport = require('passport');
var fs = require('fs');
var cors = require('cors');
var max = 500;
var min =8;

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public idGenerator:number;
  public Recipes:RecipeModel;
  public username:string;
  public RecipesCatalog:RecipeCatalogModel;
  public RecipeCatalogDetails:RecipeCatalogDetailsModel;
  public User:UserModel;

  public googlePassportObj:GooglePassportObj;

  //Run configuration methods on the Express instance.
  constructor() {
    this.googlePassportObj = new GooglePassportObj();

    this.expressApp = express();
    this.middleware();
    this.routes();
    this.idGenerator = Math.floor(Math.random() * (max - min) + min);
    this.Recipes = new RecipeModel();
    this.RecipesCatalog = new RecipeCatalogModel();
    this.RecipeCatalogDetails = new RecipeCatalogDetailsModel();
    this.User = new UserModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger('dev'));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(passport.initialize());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));

     this.expressApp.use(passport.session({ secret: 'keyboard cat' }));
     
     this.expressApp.use(passport.session());
  }

private validateAuth(req, res, next):void {
    if (req.isAuthenticated()) { console.log("user is authenticated"); return next(); }
    console.log("user is not authenticated");
    res.redirect('/');
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    router.use(cors());

    router.options('*',cors());



    //oauth

	router.get('/auth/google',cors(),
    passport.authenticate('google', 
        {scope: ['https://www.googleapis.com/auth/plus.me', 'email'] }
    )
);

router.get('/auth/google/callback', 
    passport.authenticate('google', 
        { failureRedirect: '/', successRedirect: '/#/allrecipes' }
    )
);


router.get('/auth/userdata', this.validateAuth, (req, res) => {
    console.log('user object:' + JSON.stringify(req.user));
    this.username = JSON.stringify(req.user);
    res.json(req.user);
});

    router.delete('/app/recipe/:recipeID', (req, res) => {
   
        var id = req.params.recipeID;
        console.log('Query single recipe with id: ' + id);
        this.Recipes.DeleteRecipe(res, {rrecipeId: id});
    });

    
    
    router.post('/app/recipe/', (req, res) => {
        console.log("Inside Post");
      
        var jsonObj = req.body;
        jsonObj.rrecipeId = this.idGenerator++;
        console.log("id..."+jsonObj.rrecipeId);
        this.Recipes.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        }); 
        res.send({ message: 'Recipe created!' });
        this.idGenerator++;
    });


    router.get('/app/recipe/', (req, res) => {
  
        console.log('Query All Recipes');
        this.Recipes.retrieveAllRecipes(res);
    });

    router.get('/app/recipe/:recipeID', (req, res) => {
   
        var id = req.params.recipeID;
        console.log('Query single recipe with id: ' + id);
        this.Recipes.retrieveRecipeDetails(res, {rrecipeId: id});
    });
    
    router.get('/app/catalog', (req, res) => {
        console.log('Query All Recipe catalog');
        this.RecipesCatalog.retrieveAllCatalog(res);
    });


	router.get('/app/catalog/:recipeCatalogDetails', (req, res) => {
        var id = req.params.recipeCatalogDetails;
        console.log('Query single recipe with catalog: ' + id);
        this.RecipeCatalogDetails.retrieveRecipeCatalogDetails(res, {rcId: id});
    });


    router.get( '/app/catalog/1/:rmealtype', (req, res) => {
        var id = req.params.rmealtype;
        console.log('Query single user with mealtype: ' + id);
        this.Recipes.retrieveRecipeDetailsByCatalogue(res, {rmealtype: id});
    });

    router.get( '/app/catalog/2/:rcuisinetype', (req, res) => {
        var id = req.params.rcuisinetype;
        console.log('Query single user with cuisinetype: ' + id);
        this.Recipes.retrieveRecipeDetailsByCatalogue(res, {rcuisinetype: id});
    });

    router.get( '/app/catalog/3/:rmealpreference', (req, res) => {
        var id = req.params.rmealpreference;
        console.log('Query single user with mealpreference: ' + id);
        this.Recipes.retrieveRecipeDetailsByCatalogue(res, {rmealpreference: id});
    });
   


    router.get( '/app/user/username/:usernames', (req, res) => {
        var id = req.params.usernames;
        console.log('Query single user with username: ' + id);
        this.User.retrieveUserDetails(res, {username: id});
    });


    router.post('/app/user/', (req, res) => {
        console.log("Inside node server User Post");
        var jsonObj = req.body;
       this.idGenerator = Math.floor(Math.random() * (max - min) + min);
        jsonObj.userId = this.idGenerator++;
        console.log("id..."+jsonObj.userId);
        
       // jsonObj.username = id;
        //console.log("username..."+jsonObj.userId);
        this.User.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        }); 
        res.send({ message: 'New User created!' });
        this.idGenerator++;
    });

    router.get('/app/all/users/', (req, res) => {
  
        console.log('Query All Users');
        this.User.retrieveAllUsers(res);
    });
      

    
    this.expressApp.use('/', router);
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/recipeAngularDist'));    
   // this.expressApp.use('/', express.static(__dirname+'/pages'));
     
    
  }

}

export {App};