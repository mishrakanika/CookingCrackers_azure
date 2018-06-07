"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var RecipeModel = /** @class */ (function () {
    function RecipeModel() {
        this.createSchema();
        this.createModel();
    }
    RecipeModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            rrecipeId: Number,
            rmethod: String,
            rname: String,
            rdescription: String,
            rcuisinetype: String,
            rmealpreference: String,
            rmealtype: String,
            rduration: Number,
            ringredients: String,
            rchefid: String,
            rimage: String
        }, { collection: 'recipes' });
    };
    RecipeModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Recipes", this.schema);
    };
    RecipeModel.prototype.retrieveAllRecipes = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RecipeModel.prototype.DeleteRecipe = function (response, filter) {
        var query = this.model.deleteOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RecipeModel.prototype.retrieveRecipeDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RecipeModel.prototype.retrieveRecipeDetailsByCatalogue = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return RecipeModel;
}());
exports.RecipeModel = RecipeModel;
