var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema({
    name: String,
    size: [String],
    price: Number,
    quantity: Number,
    color: [String],
    imgPaths: [String],
    gender: String,
    category: String,
    adult: Boolean
});

module.exports = mongoose.model('Product', product);