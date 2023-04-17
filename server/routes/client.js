const express = require("express");
const router = express.Router();
const JobModel = require("../models/jobModel.js");

//create a route for the client
router.post("/addJob", (req, res) => {
  const {
    title,
    salary,
    company,
    experience,
    postDate,
    description,
    email,
    phone,
  } = req.body;
  const newJob = new JobModel({
    title,
    salary,
    company,
    experience,
    postDate,
    description,
    email,
    phone,
  });
  newJob.save();
  res.send("Job added successfully");
});

// router.get("/getJobs",(req,res)  )
