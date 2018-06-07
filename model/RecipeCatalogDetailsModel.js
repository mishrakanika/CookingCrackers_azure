"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var RecipeCatalogDetailsModel = /** @class */ (function () {
    function RecipeCatalogDetailsModel() {
        this.createSchema();
        this.createModel();
    }
    RecipeCatalogDetailsModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            rcId: Number,
            recipecatalogtype: [{
                    name: String,
                    rctypeId: Number
                }]
        }, { collection: 'recipecatalogtype' });
    };
    RecipeCatalogDetailsModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("recipecatalogtype", this.schema);
    };
    RecipeCatalogDetailsModel.prototype.retrieveRecipeCatalogDetails = function (response, filter) {
        var query = this.model.findOne(filter).select('recipecatalogtype');
        query.exec(function (err, itemArray) {
            console.log("itemArrayvalue" + itemArray);
            response.json(itemArray);
        });
    };
    return RecipeCatalogDetailsModel;
}());
exports.RecipeCatalogDetailsModel = RecipeCatalogDetailsModel;
