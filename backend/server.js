var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', (req, res) =>{
    res.send("GET request to the homepage");
});


app.listen(3000, () =>{
    console.log("Clothes Webshop API running on port 3000...");
});