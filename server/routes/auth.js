// create a authentication route for the freelancer

//  Import the necessary modules
const express = require("express");
const passport = require("passport");
const router = express.Router();
const { signedinUsers, signedupUsers } = require("../models/usersModel");

// use the users model thats is exported from server.js
router.use(passport.initialize());
router.use(passport.session());

passport.use(signedinUsers.createStrategy());

// passport.use(new LocalStrategy(signedinUsers.authenticate()));
passport.serializeUser(signedinUsers.serializeUser());
passport.deserializeUser(signedinUsers.deserializeUser());

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const newUser = new signedinUsers({
    username: email,
    email: email,
    password: password,
  });

  // use the authenticate method of passport-local-mongoose to authenticate the user
  signedinUsers.register(newUser, password, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      //check the user is there are in db or not
      passport.authenticate("local")(req, res, () => {
        // res.render("/dashboard");
        console.log("User authenticated successfully!");
        // res.redirect("/dashboard");
      });
    }
  });
  // res.json({ message: "success" });
});

module.exports = router;
