//Require mongoose module
const mongoose = require("mongoose");

//Define a PageSchema. Note: Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. Mongoose v6.1.3: Schemas (mongoosejs.com)
const StudentSchema = mongoose.Schema({
    firstname:  String,
    lastname: String, 
    race: String,
    sex: String,
    grade: String,
    school: String
});

//Create the model for StudentSchema
//Export the model
const Student = (module.exports = mongoose.model("Student", StudentSchema));