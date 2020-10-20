const router = require('express').Router();
const User = require("../../models/user")

const authCheck = (req, res, next) => {
    if(!req.user){
        //if user is not logged in
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.json(req.user)
})

router.get('/addressUpdate/:id/:addre', (req,res) => {
    var addr = {
        "address": req.params.addre
    }
    User.findByIdAndUpdate(req.params.id, addr)
        .then(user => {
            res.json(user)
            res.redirect('http://localhost:3000')
        })
        .catch(err => res.status(404).json({success: false}))
})

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(404).json({success: false})
        });
});

module.exports = router;