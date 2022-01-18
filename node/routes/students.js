// All API calls are routed on this file for orders collection

//Create a router module
const express = require("express");
const router = express.Router();

//Require the orders model
const Student = require("../models/student");

//Define the GET method on the router. 
router.get("/", (req, res) => {
    //Use find({}) query to retrieve the documents from the collection
    Student.find({}, (error, students) => {
        if(error) console.log("Error in Students " + error);
        res.json(students); //Display the response in json
    });
});


//Export the router
module.exports = router;