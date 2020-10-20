const express = require('express');
const router = express.Router();
const passport = require("passport");
 
router.get('/login', (req, res) => {
    res.json(req.user);
})
 
router.get('/logout', (req, res) => {
    console.log('logging out')
    req.logout();
    res.redirect('http://localhost:3000');
    //res.send('logging out');
})
 
//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
 
router.get('/google/redirect', passport.authenticate('google'), (req,res) => {
    //res.send(req.user);
    if(req.user.address === "1xx1"){
        res.redirect('http://localhost:3000/account')
    } else {
    res.redirect('http://localhost:3000')
    }
});
 
 
/* FACEBOOK AUTH [API WAS REQUIRING TOO MANY VERIFICATIONS]
router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email']
}));
 
router.get('/facebook/redirect', passport.authenticate('facebook'), (req,res) => {
    //res.send(req.user);
    res.redirect('http://localhost:3000')
});
*/
 
module.exports = router;
