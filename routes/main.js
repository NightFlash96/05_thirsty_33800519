// Create a new router
const express = require("express");
const router = express.Router();

// Data
var shopData = {
    shopName: "Drink Drive Thru",
    productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    shopBranches: [
        {location: "Lewisham", address: "12 Lewisham High Street", manager: "Alice"},
        {location: "Croydon", address: "6 Croydon Road", manager: "Barry"},
        {location: "Greenwich", address: "99 Cutty Sark Way", manager: "Charlie"}
    ]
};

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
}); 

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData)
}); 

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.search_category);
});

router.get("/register", (req,res) => {
    res.render("register.ejs", shopData); 
}); 

router.post("/registered", (req,res) => { 
    res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered! We will send an email to you at '+ req.body.email);
}); 

router.get("/survey", (req,res) => {
    res.render("survey.ejs", shopData); 
}); 

// Accept survey submissions and render a results page
router.post('/survey_results', (req, res) => {
    const survey = {
        first: req.body.first || '',
        last: req.body.last || '',
        email: req.body.email || '',
        age: req.body.age || '',
        drink_category: req.body.drink_category || '',
        student: req.body.student === 'yes' ? 'Yes' : 'No'
    };

    res.render('survey_results.ejs', { shopName: shopData.shopName, survey: survey });
});



// Export the router object so index.js can access it
module.exports = router;
