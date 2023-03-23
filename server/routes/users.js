const express = require("express");
const router = express.Router();
const signedupUsers = require("../models/usersModel");

router.get("/users", (req, res) => {
  signedupUsers.find({}, (error, users) => {
    if (error) {
      console.log(error);
    } else {
      console.log(users);
      res.json(users);
    }
  });
});

router.post("/signup", (req, res) => {
  const { firstName, lastName, email, phone, password, accountType } = req.body;
  const newuser = new signedupUsers({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    password: password,
    accountType: accountType,
  });
  newuser.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("New User saved successfully!");
    }
  });

  res.json({ message: "success" });
});

module.exports = router;
