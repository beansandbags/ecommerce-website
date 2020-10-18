const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/webp') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });

// Product Model

const Product = require('../../models/Product');

// @route   GET api/products
// @desc    Get All Products
// @access  Public

router.get('/', (req, res) => {
    Product.find()  
        .sort({ name: 1 })
        .then(products => res.json(products))
});


// @route   GET api/products/coffees
// @desc    Get All Coffees
// @access  Public

router.get('/coffees', (req, res) => {
    Product.find({category: "coffee"})
        .sort({ type: 1, brand: 1 , name: 1 })
        .then(products => res.json(products))
});

// @route   GET api/products/teas
// @desc    Get All Teas
// @access  Public

router.get('/teas', (req, res) => {
    Product.find({category: "tea"})
        .sort({ type: 1, brand: 1 , name: 1 })
        .then(products => res.json(products))
});

// @route   GET api/products/:id
// @desc    Get All Products
// @access  Public

router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(products => res.json(products))
    .catch(err => console.error(err))

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
        productImage: req.body.productImage
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