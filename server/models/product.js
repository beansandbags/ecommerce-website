const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    features: {
        type: [String]
    },
    stock: {
        type: Number,
        default: 10
    },
    purchases: {
        type: Number,
        default: 0
    },
    comments: {
        type: [String],
        default: [""]
    },
    wishlist: {
        type: Number,
        default: 0
    },
    productImage:{
        type: String,
        required: true
    }
});

module.exports = Product = mongoose.model('product', ProductSchema);