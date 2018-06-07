import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';



import {DataAccess} from './DataAccess';
import {RecipeModel} from './model/RecipeModel';
import {RecipeCatalogModel} from './model/RecipeCatalogModel';
import {RecipeCatalogDetailsModel} from './model/RecipeCatalogDetailsModel';

//import GooglePassportObj from './GooglePassport';

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
  public RecipesCatalog:RecipeCatalogModel;
  public RecipeCatalogDetails:RecipeCatalogDetailsModel;

  //public googlePassportObj:GooglePassportObj;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.idGenerator = Math.floor(Math.random() * (max - min) + min);
    this.Recipes = new RecipeModel();
    this.RecipesCatalog = new RecipeCatalogModel();
    this.RecipeCatalogDetails = new RecipeCatalogDetailsModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger('dev'));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));

    // this.express.use(session({ secret: 'keyboard cat' }));
    // this.express.use(passport.initialize());
    // this.express.use(passport.session());
  }

//   private validateAuth(req, res, next):void {
//     if (req.isAuthenticated()) { return next(); }
//         res.redirect('/');
//   }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    router.use(cors());

    router.options('*',cors());



    //oauth

// 	router.get('/auth/facebook', 
//     passport.authenticate('facebook', 
//         {scope: ['public_profile', 'email'] }
//     )
// );

// router.get('/auth/facebook/callback', 
//     passport.authenticate('facebook', 
//         { failureRedirect: '/', successRedirect: '/myprofile' }
//     )
// );

// router.get('/auth/userdata', this.validateAuth, (req, res) => {
//     console.log('user object:' + JSON.stringify(req.user));
//     this.username = JSON.stringify(req.user);
//     res.json(req.user);
// });

    router.post('/app/recipe/:recipeID', (req, res) => {
                
        var id = req.params.recipeID;
        console.log('Query changed single list with id: ' + id);

        console.log(res.header);
        res.send("Received post for id:"+ id);
    });

    router.delete('/app/recipe/:recipeID', (req, res) => {
   
        var id = req.params.recipeID;
        console.log('Query single recipe with id: ' + id);
        this.Recipes.DeleteRecipe(res, {rrecipeId: id});
    });

    router.get('/', (req, res) => {
        console.log('Query All list');
        this.Recipes.retrieveAllRecipes(res);
       
    });

    
    
    router.post('/app/recipe/', (req, res) => {
        console.log("Inside Post");
      
        var jsonObj = req.body;
        jsonObj.rrecipeId = this.idGenerator;
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



    
    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
     
    
  }

}

export {App};