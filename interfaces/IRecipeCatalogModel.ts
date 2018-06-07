import Mongoose = require("mongoose");

interface IRecipeCatalogModel extends Mongoose.Document {
    name: String,
    rcId: Number,
}
export {IRecipeCatalogModel};