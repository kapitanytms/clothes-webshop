var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/clothes-webshop');

var Product = require('./model/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', (req, res) => {
    res.send("GET request to the homepage");
});

app.post('/product', (req, res) => {
    var product = new Product(req.body);
    
    
    
    product.save((err, savedProduct) => {
       if (err) {
           res.status(500).send({error:"Could not save product"});
       } else {
           res.status(200).send(savedProduct);
       }
    });
});


app.get('/product', (req, res) => {
    Product.find({}, (err, products) => {
        if (err){
            res.status(500).send({error:"Could not fetch products"});
        } else {
            res.status(200).send(products);
        }
    });
});


app.listen(3000, () =>{
    console.log("Clothes Webshop API running on port 3000...");
});