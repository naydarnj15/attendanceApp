//Require mongoose module
const mongoose = require("mongoose");

//Define a PageSchema. Note: Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. Mongoose v6.1.3: Schemas (mongoosejs.com)
const ReportSchema = mongoose.Schema({
    firstname:  String, // String is shorthand for {type: String}
    lastname: String, // user-friendly name
    date: String,
    activity: String
});

//Create the model for PageSchema
//Export the model
const Report = (module.exports = mongoose.model("Report", ReportSchema));