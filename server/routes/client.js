const express = require("express");
const router = express.Router();
const Jobs = require("../models/jobModel.js");

//create a route for the client
router.post("/addJob", (req, res) => {
  const {
    title,
    description,
    category,
    budget,
    timeline,
    requiredSkills,
    client_id,
  } = req.body;
  const newJob = new Jobs({
    title,
    description,
    category,
    budget,
    timeline,
    requiredSkills,
    client_id,
  });
  newJob.save((err, job) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(job);
    }
  });
});

router.get("/allJobs", (req, res) => {
  Jobs.find({}, (error, jobs) => {
    if (error) {
      console.log(error);
    } else {
      console.log(jobs);
      res.json(jobs);
    }
  });
});

// router.get("/getJobs",(req,res)  )
module.exports = router;
