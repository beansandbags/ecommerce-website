const express = require('express');
const router = express.Router();

// Product Model

const Product = require('../../models/Product');

// @route   GET api/products
// @desc    Get All Items
// @access  Public

router.get('/', (req, res) => {
    Product.find()
        .sort({ type: 1, brand: 1 , name: 1 })
        .then(products => res.json(products))
});

// @route   POST api/products
// @desc    Post any item
// @access  Public

router.post('/', (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        category: req.body.category,
        brand: req.body.brand,
        price: req.body.price,
        features: req.body.features,
    });
    newProduct.save().then(product => res.json(product));
});

// @route   DELETE api/products/:id
// @desc    DELETE any item
// @access  Public

router.delete('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => product.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});
    

module.exports = router;