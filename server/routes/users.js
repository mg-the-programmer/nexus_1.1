const express = require("express");
const router = express.Router();
const { signedupUsers, signedinUsers } = require("../models/usersModel");

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

  //create a new user check if the user already exists
  signedupUsers.findOne({ $or: [{ email }, { phone }] }, (err, user) => {
    if (user) {
      if (user.email === email) {
        console.log("Email already exists!"); // email already exists
        res.json({ head: "Email", message: "Email already exists!" });
      } else {
        console.log("Phone number already exists!"); // phone number already exists
        res.json({ head: "Phone", message: "Phone number already exists!" });
      }
    } else {
      newuser.save((error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("New User saved successfully!"); // new user data saved
        }
      });
    }
  });
});

module.exports = router;
