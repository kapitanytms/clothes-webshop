var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    size: {
        type: [String],
        required: [true, 'Size is required.']
    },
    price: {
        type: Number,
        required: [true, 'Price is required.']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required.']
    },
    color: {
        type: [String],
        required: [true, 'Color is required.']
    },
    imgPaths: {
        type: [String],
        required: [true, 'Image paths are required.']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required.']
    },
    category: {
        type: String,
        required: [true, 'Category is required.']
    },
    adult: {
        type: Boolean,
        required: [true, 'Adult is required.']
    }
});

module.exports = mongoose.model('Product', product);
