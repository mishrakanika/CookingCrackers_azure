"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var RecipeCatalogModel = /** @class */ (function () {
    function RecipeCatalogModel() {
        this.createSchema();
        this.createModel();
    }
    RecipeCatalogModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            name: String,
            rcId: Number
        }, { collection: 'recipecatalog' });
    };
    RecipeCatalogModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("RecipeCatalogD", this.schema);
    };
    RecipeCatalogModel.prototype.retrieveAllCatalog = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RecipeCatalogModel.prototype.retrieveCatalogDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return RecipeCatalogModel;
}());
exports.RecipeCatalogModel = RecipeCatalogModel;
