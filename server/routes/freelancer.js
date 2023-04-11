// create a new freelancer profile

//import the necessary modules
const express = require("express");
const router = express.Router();
const Freelancer = require("../models/freelancerModel");
const passport = require("passport");
// use the freelancer model thats is exported from server.js
router.post("/freelancer/info", (req, res) => {
  const {
    name,
    email,
    skills,
    rate,
    // resume,
    isAvailable,
    githubLink,
    experience,
    jobTitle,
    description,
    jobSuccessRate,
    user_id,
  } = req.body;

  const newFreelancer = new Freelancer({
    name: name,
    email: email,
    skills: skills,
    rate: rate,
    // resume: resume,
    isAvailable: isAvailable,
    githubLink: githubLink,
    experience: experience,
    jobTitle: jobTitle,
    description: description,
    jobSuccess: jobSuccessRate,
    user_id: user_id,
  });

  newFreelancer.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("New Freelancer saved successfully!");
      res.json({ message: "success" });
      // res.redirect("/dashboard");
    }
  });
});

// get all freelancer profiles
router.get("/freelancer/info", (req, res) => {
  Freelancer.find({}, (error, freelancers) => {
    if (error) {
      console.log(error);
    } else {
      // console.log(freelancers);cccl
      res.json(freelancers);
    }
  });
});

router.get("/auth", (req, res) => {
  //use the cokkie to get the user id
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    console.log("User is not authenticated");
    res.send("not verified");
  }
});

// get a freelancer profile by id
router.get("/freelancer/:id", (req, res) => {
  Freelancer.findById(req.params.id, (error, freelancer) => {
    if (error) {
      console.log(error);
    } else {
      // console.log(freelancer);
      res.json(freelancer);
    }
  });
});

router.get("/freelancerDetails", (req, res) => {
  Freelancer.findOne({ user_id: req.user._id }, (error, freelancer) => {
    if (error) {
      console.log(error);
    } else {
      res.json(freelancer);
    }
  });
});

// update a freelancer profile by id

//create a put request to update a darkmode value
router.put("/freelancer/darkmode/:id", (req, res) => {
  Freelancer.findById(req.params.id, (error, freelancer) => {
    if (error) {
      console.log(error);
    } else {
      freelancer.darkMode = req.body.darkMode;
      freelancer.save((error) => {
        if (error) {
          console.log(error);
        } else {
          // console.log("Darkmode updated successfully!");
        }
      });
    }
  });
});

router.put("/freelancer/:id", (req, res) => {
  Freelancer.findById(req.params.id, (error, freelancer) => {
    if (error) {
      console.log(error);
    } else {
      freelancer.firstName = req.body.firstName;
      freelancer.lastName = req.body.lastName;
      freelancer.email = req.body.email;
      freelancer.phone = req.body.phone;
      freelancer.password = req.body.password;
      freelancer.accountType = req.body.accountType;
      freelancer.skills = req.body.skills;
      freelancer.hourlyRate = req.body.hourlyRate;
      freelancer.bio = req.body.bio;
      freelancer.save((error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Freelancer updated successfully!");
        }
      });
    }
  });
});

// delete a freelancer profile by id
router.delete("/freelancer/:id", (req, res) => {
  Freelancer.findByIdAndDelete(req.params.id, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Freelancer deleted successfully!");
    }
  });
});

module.exports = router;
