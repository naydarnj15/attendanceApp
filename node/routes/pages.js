// All API calls are routed on this file for pages collection

//Create a router module
const express = require("express");
const router = express.Router();

//Require the page model
const Page = require("../models/page");

//Define the GET method on the router. 
router.get("/", (req, res) => {
    //Use find({}) query to retrieve the documents from the collection
    Page.find({}, (error, pages) => {
        if(error) console.log("Error in Pages " + error);
        res.json(pages); //Display the response in json
    });
});


//Define the POST method on the router. 
router.post("/", (req, res) => {
    const name = req.fields.name;
    const slug = req.fields.slug;
    const content = req.fields.content;

    const page = new Page({
        name: name,
        slug: slug,
        content: content  
    });

    console.log(page + " POST Page ")

    page.save((error) => {
        if(error) console.log("Error in Pages" + error)
            res.status(201).end();  
    });
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const name = req.fields.name;
    const slug = req.fields.slug;
    const content = req.fields.content;

    const page = new Page({
        name: name,
        slug: slug,
        content: content
    });
    console.log(page);

    Page.findById(id, (error, page) => {
        if(error) console.log("Error in Pages " + error);
            page.name = name;
            page.slug = slug;
            page.content = content;
        
            page.save((error) => {
                if(error) console.log("Error in Pages " + error);
                res.status(201).end(); 
            });
    });
    
});

//Define the DELETE method on the router. 
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Page.findByIdAndRemove(id, (error) => {
        if(error) console.log("Error in Pages " + error);
        res.status(204).end(); 
    });
});

//Export the router
module.exports = router;