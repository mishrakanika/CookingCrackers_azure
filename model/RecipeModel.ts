import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IRecipeModel} from '../interfaces/IRecipeModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class RecipeModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
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
                    rimage: String,
            }, {collection: 'recipes'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRecipeModel>("Recipes", this.schema);
    }
    
    public retrieveAllRecipes(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    } 


    public DeleteRecipe(response:any, filter:Object) {
        var query = this.model.deleteOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    } 

	public retrieveRecipeDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
	public retrieveRecipeDetailsByCatalogue(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    // public UpdateRecipe(response:any, filter1:Object , filter2:object) {
    //     console.log("updating recipe with id :"+filter2.toString );
    //     var query = this.model.findOne(filter2);
    //     var newquery = {$set:filter1}
        
    //     query.exec( (err, itemArray) => {
    //         response.json(itemArray);
    //     });
    // } 


}
export {RecipeModel};