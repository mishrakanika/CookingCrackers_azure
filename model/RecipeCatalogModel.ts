import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IRecipeCatalogModel} from '../interfaces/IRecipeCatalogModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class RecipeCatalogModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                name: String,
                rcId: Number,
    
            }, {collection: 'recipecatalog'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRecipeCatalogModel>("RecipeCatalogD", this.schema);
    }

    public retrieveAllCatalog(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
     }



     public retrieveCatalogDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
            
        });

    }
}
export {RecipeCatalogModel};