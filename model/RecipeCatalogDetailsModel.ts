import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IRecipeCatalogDetailsModel} from '../interfaces/IRecipeCatalogDetailsModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class RecipeCatalogDetailsModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                rcId: Number,
                recipecatalogtype: [ {
                    name: String,
                    rctypeId: Number
                }]
            }, {collection: 'recipecatalogtype'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRecipeCatalogDetailsModel>("recipecatalogtype", this.schema);
    }
    
    public retrieveRecipeCatalogDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter).select('recipecatalogtype');
       query.exec( (err, itemArray) => {
           console.log("itemArrayvalue"+ itemArray);
            response.json(itemArray);
        });
       
       
    }

    

}
export {RecipeCatalogDetailsModel};