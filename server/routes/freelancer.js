// create a new freelancer profile

//import the necessary modules
const express = require("express");
const router = express.Router();
const Freelancer = require("../models/freelancerModel");
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
  });

  newFreelancer.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("New Freelancer saved successfully!");
    }
  });

  res.json({ message: "success" });
});

// get all freelancer profiles
router.get("/freelancer/info", (req, res) => {
  Freelancer.find({}, (error, freelancers) => {
    if (error) {
      console.log(error);
    } else {
      console.log(freelancers);
      res.json(freelancers);
    }
  });
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
          console.log(freelancer.darkMode);
          console.log("Darkmode updated successfully!");
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
