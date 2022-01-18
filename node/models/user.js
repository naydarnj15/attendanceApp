//Require mongoose module
const mongoose = require("mongoose");

//Define a PageSchema. Note: Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. Mongoose v6.1.3: Schemas (mongoosejs.com)
const UserSchema = mongoose.Schema({
    firstname:  String,
    lastname: String, 
    email: String,
    password: String
});

//Create the model for StudentSchema
//Export the model
const User = (module.exports = mongoose.model("User", UserSchema));