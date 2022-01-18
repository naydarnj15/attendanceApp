// All API calls are routed on this file for orders collection

//Create a router module
const express = require("express");
const router = express.Router();

//Require the orders model
const User = require("../models/user");

//Define the GET method on the router. 
router.get("/", (req, res) => {
    //Use find({}) query to retrieve the documents from the collection
    User.find({}, (error, users) => {
        if(error) console.log("Error in Users " + error);
        res.json(users); //Display the response in json
    });
});

//Define the POST method on the router. 
/*
router.post("/", (req, res) => {
    const firstname = req.fields.firstname;
    const lastname = req.fields.lastname;
    const email = req.fields.email;
    const password = req.fields.password;

    const user = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password  
    });

    console.log(user + " POST Page ")

    user.save((error) => {
        if(error) console.log("Error in Users" + error)
            res.status(201).end();  
    });
});*/

//Export the router
module.exports = router;