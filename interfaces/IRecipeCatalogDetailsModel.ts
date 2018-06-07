import Mongoose = require("mongoose");

interface IRecipeCatalogDetailsModel extends Mongoose.Document {
    rcId: number;
    recipecatalogtype: [ {
        name: String,
        rctypeId: Number
    }];
}
export {IRecipeCatalogDetailsModel};
