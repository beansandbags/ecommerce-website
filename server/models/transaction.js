const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    productID: {
        type: [String],
        required: true
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