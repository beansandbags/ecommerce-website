const express = require('express');
const router = express.Router();
const passport = require("passport");

// https://medium.com/swlh/set-up-an-express-js-app-with-passport-js-and-mongodb-for-password-authentication-6ea05d95335c

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

module.exports = router;