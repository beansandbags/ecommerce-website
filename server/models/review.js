const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userPhoto: {
        type: String,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: true
        // This needs to check whether there exists a document in our Transactions database where productID and userID are together
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Review = mongoose.model('review', ReviewSchema);