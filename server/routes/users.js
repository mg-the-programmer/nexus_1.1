const express = require("express");
const router = express.Router();
const signedupUsers = require("../models/usersModel");
const passport = require("passport");

router.use(passport.initialize());
router.use(passport.session());

// passport.use(signedupUsers.createStrategy());

passport.serializeUser(signedupUsers.serializeUser());
passport.deserializeUser(signedupUsers.deserializeUser());

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

// router.get("/dashboard", (req, res) => {
//   if (req.isAuthenticated()) {
//     console.log("User is authenticated");
//     res.redirect("/dashboard");
//   } else {
//     console.log("User is not authenticated");
//     res.redirect("/login");
//   }
//   // console.log(req.user);
// });

router.post("/signup", (req, res) => {
  const { firstName, lastName, email, phone, password, accountType } = req.body;
  const newUser = new signedupUsers({
    firstName: firstName,
    lastName: lastName,
    username: email,
    email: email,
    phone: phone,
    password: password,
    accountType: accountType,
  });

  //create a new user check if the user already exists
  // signedupUsers.findOne({ $or: [{ email }, { phone }] }, (err, user) => {
  //   if (user) {
  //     if (user.email === email) {
  //       console.log("Email already exists!"); // email already exists
  //       res.json({ head: "Email", message: "Email already exists!" });
  //     } else {
  //       console.log("Phone number already exists!"); // phone number already exists
  //       res.json({ head: "Phone", message: "Phone number already exists!" });
  //     }
  //   } else {
  signedupUsers.register(newUser, password, (error, user) => {
    if (error) {
      console.log(error);
      res.json({ head: error.name, message: error.message });
    } else {
      passport.authenticate("local")(req, res, () => {
        // res.render("/dashboard");
        console.log("User Registered and Authenticated successfully!");
        res.redirect("/dashboard");
      });
    }
  });

  router.get("/checkauth", (req, res) => {
    if (req.isAuthenticated()) {
      res.status(200).json({ success: true, message: "User authenticated!" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "User not authenticated!" });
    }
  });
  // Logout
  router.get("/logout", (req, res) => {
    req.logout();
    res.status(200).json({ success: true, message: "User logged out!" });
  });
  // }
  // });
  // });
});

module.exports = router;
