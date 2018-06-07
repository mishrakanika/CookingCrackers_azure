import Mongoose = require("mongoose");

interface IRecipeModel extends Mongoose.Document {
    
        rname: String,
        rrecipeId: Number,
        rmethod: String,
        rdescription: String,
        rcuisinetype: String,
        rmealpreference: String,
        rmealtype: String,
        rduration: Number,
        ringredients: String,
        rchefid: String,
        rimage: String
   
}
export {IRecipeModel};
