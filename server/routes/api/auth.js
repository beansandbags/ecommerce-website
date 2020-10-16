const express = require('express');
const router = express.Router();
const passport = require("passport");


// https://medium.com/swlh/set-up-an-express-js-app-with-passport-js-and-mongodb-for-password-authentication-6ea05d95335c

router.get('/login', (req, res) => {
    res.send('loggin in');
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:3000')
    //res.send('logging out');
})

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google'), (req,res) => {
    //res.send(req.user);
    res.redirect('http://localhost:3000')
});

/*
router.post("/register_login", (req, res, next) => {
    passport.authenticate("local", function(err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: "No user found" });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: `logged in ${user.id}` });
        });
    })(req, res, next);
});

router.get('/current-user', (req, res) => {
    const currentUser = JSON.parse(storage.getItem('user'));
    res.send(currentUser);
});
*/

module.exports = router;