// All API calls are routed on this file for pages collection

//Create a router module
const express = require("express");
const router = express.Router();

//Require the report model
const Report = require("../models/report");

//Define the GET method on the router. 
router.get("/", (req, res) => {
    //Use find({}) query to retrieve the documents from the collection
    Report.find({}, (error, reports) => {
        if(error) console.log("Error in Report " + error);
        res.json(reports); //Display the response in json
    });
});


//Define the POST method on the router. 
router.post("/", (req, res) => {
    const firstname = req.fields.firstname;
    const lastname = req.fields.lastname;
    const date = req.fields.date;
    const activity = req.fields.activity;

    const report = new Report({
        firstname: firstname,
        lastname: lastname,
        date: date,
        activity: activity  
    });

    console.log(report + " POST Page ")

    report.save((error) => {
        if(error) console.log("Error in Report" + error)
            res.status(201).end();  
    });
});


module.exports = router;