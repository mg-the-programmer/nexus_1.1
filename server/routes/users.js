const express = require("express");
const passport = require("passport");
const router = express.Router();
const LocalStrategy = require("passport-local").Strategy;
const signedupUsers = require("../models/usersModel");

router.use(passport.initialize());
router.use(passport.session());

// passport.use(signedupUsers.createStrategy());
passport.use(
  new LocalStrategy({ usernameField: "email" }, function (
    email,
    password,
    done
  ) {
    signedupUsers.findOne({ email }).exec((err, user) => {
      if (err) {
        return done(err, null);
      }

      if (!user) {
        return done("No user found", null);
      }

      user.authenticate(password, function (err, user, passwordError) {
        if (err) {
          return done(err, null);
        }

        if (passwordError) {
          return done("Email or Password not valid", null);
        }

        return done(null, user);
      });
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  signedupUsers.findById(id, (err, user) => {
    done(err, user);
  });
});

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

router.get("/dashboard", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("User is authenticated");
    res.send("verified");
  } else {
    console.log("User is not authenticated");
    res.send("not verified");
  }
  // console.log(req.user);
});
router.post("/login", (req, res, next) => {
  accountType = req.body.accountType;
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Internal Server Error");
    }
    if (!user) {
      console.error(info.message);
      return res.status(401).send("Unauthorized");
    }
    signedupUsers.findOne(
      {
        username: user.username,
        password: user.password,
      },
      (err, signupUser) => {
        console.log(signupUser);
        console.log(signupUser.accountType);
        console.log(accountType);
        if (err) {
          console.error(err);
          return res.status(500).send("Internal Server Error");
        }
        if (!signupUser) {
          console.error("Invalid username, password");
          return res.status(401).json({
            head: "Credentials",
            message: "Invalid username, password",
          });
        }
        if (signupUser.accountType !== accountType) {
          console.error(
            "Invalid account type. Please check your account type, email, and password."
          );
          return res.json({
            head: "Account Type",
            message:
              "Invalid account type. Please check your account type, email, and password.",
          });
        }

        console.log("User logged in successfully!");
        req.logIn(user, (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send("Internal Server Error");
          }
          console.log(user);
          user.id = user._id.toString();
          req.session.user_id = user.id; // save user ID in the session
          req.session.save();
          console.log("User logged in successfully!");
          return res.send("verified");
        });
      }
    );
  })(req, res, next);
});

router.post("/signup", (req, res) => {
  const { firstName, lastName, email, phone, password, accountType } = req.body;
  const newUser = new signedupUsers({
    firstName: firstName,
    lastName: lastName,
    username: email,
    email: email,
    phone: phone,
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
  signedupUsers.register(newUser, password, (error) => {
    if (error) {
      console.log(error);
      return res.json({ head: error.name, message: error.message });
    }
    // passport.authenticate("local")(req, res, () => {
    console.log("User Registered and Authenticated successfully!");
    res.send("created");
    // });
  });
  // }
  // });
  // });
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
  req.logout((err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log("User logged out successfully!");
    res.send("logged out");
  });
});

module.exports = router;
