var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/clothes-webshop');

var Product = require('./model/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(function (req, res, next) {

   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', '*');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
});


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