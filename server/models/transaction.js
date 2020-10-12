const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    userID: {
        type: ObjectId,
        required: true
    },
    productID: {
        type: [ObjectId],
        required: true
    },
    quantity: {
        type: [Number],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    value: {
        type: Number,
        required: true
    }
});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);