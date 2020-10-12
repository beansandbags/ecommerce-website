const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    productID: {
        type: ObjectId,
        required: true
    },
    userID: {
        type: ObjectId,
        required: true
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