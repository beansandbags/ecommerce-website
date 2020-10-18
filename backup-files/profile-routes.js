
const router = require('express').Router();
const User = require('../../models/user')

/*
const authCheck = (req, res, next) => {
    console.log("AAAA: ", req.user)
    if(!req.user){
        //if user is not logged in
        res.redirect('/auth/login');
    } else {
        next();
    }
};
*/

router.get('/', (req, res) => {
    // res.send('you are logged in ' + req.user.name)
    res.json(req.user)
    console.log("BBB", JSON.stringify(req.user))
    /*
    User.findById(req.user.id)
        .then(user => res.json(user))
        .catch(err => console.error(err))
    */
})

module.exports = router;