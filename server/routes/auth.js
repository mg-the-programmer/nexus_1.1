// create a authentication route for the freelancer

//  Import the necessary modules
const express = require("express");
const passport = require("passport");
const router = express.Router();

const { signedinUsers, signedupUsers } = require("../models/usersModel");

// use the users model thats is exported from server.js
passport.use(signedinUsers.createStrategy());
passport.serializeUser(signedinUsers.serializeUser());
passport.deserializeUser(signedinUsers.deserializeUser());

router.post("/login/auth", (req, res) => {
  const { email, password, accountType } = req.body;
  console.log(req.body);

  // use the authenticate method of passport-local-mongoose to authenticate the user
  signedinUsers.authenticate()(email, password, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      console.log(user);
      res.json(user);
    }
  });
});
