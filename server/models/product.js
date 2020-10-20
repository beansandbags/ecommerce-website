const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReviewSchema = require('./review').schema;

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
        type: [ReviewSchema],
        default: []
    },
    avgRating: {
        type: Number,
        default: 0,
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