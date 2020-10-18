const express = require('express');
const router = express.Router();

// Product Model

const Transaction = require('../../models/Transaction');

// @route   GET api/transactions
// @desc    Get All Items
// @access  Public

router.get('/', (req, res) => {
    Transaction.find()
        .sort({ date: -1 })
        .then(transactions => res.json(transactions))
});

// @route   POST api/transactions
// @desc    Post any item
// @access  Public

router.post('/', (req, res) => {
    const newTransaction = new Transaction({
        userID: req.body.userID,
        productID: req.body.productID,
        quantity: req.body.quantity,
        date: req.body.date,
        value: req.body.value,
    });
    newTransaction.save().then(transaction => res.json(transaction));
});

// @route   DELETE api/products/:id
// @desc    DELETE any item
// @access  Public

router.delete('/:id', (req, res) => {
    Transaction.findById(req.params.id)
        .then(transaction => transaction.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});
    

module.exports = router;