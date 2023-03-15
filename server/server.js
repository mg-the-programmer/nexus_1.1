const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");

const uri =
  "mongodb+srv://manigandan:manigandan@cluster0.oyky4iz.mongodb.net/nexusdb";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  accountType: String,
});

const signedupUsers = mongoose.model("signedupUsers", userSchema);
const freelancerSchema = new Schema({
  name: String,
  email: String,
  skills: { type: [String] },
  rate: String,
  // resume: String,
  isAvailable: Boolean,
  githubLink: String,
  experience: String,
  jobTitle: String,
  description: String,
  jobSuccess: Number,
});
const freelancer = mongoose.model("freelancer", freelancerSchema);

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

app.get("/users", (req, res) => {
  signedupUsers.find({}, (error, users) => {
    if (error) {
      console.log(error);
    } else {
      console.log(users);
      res.json(users);
    }
  });
});

app.post("/users/signup", (req, res) => {
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

//create a post request to store freelancer details
app.post("/freelancer/info", async (req, res) => {
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

  const existingUser = await freelancer.findOne({ email });
  console.log(existingUser);
  if (existingUser) {
    return res
      .status(400)
      .json({ error: "User with the same email already exists" });
  }

  const newFreelancer = new freelancer({
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

app.get("/freelancer/info", (req, res) => {
  freelancer.find({}, (error, users) => {
    if (error) {
      console.log(error);
    } else {
      console.log(users);
      res.json(users);
    }
  });
});

app.listen(port, () => {
  console.log("Server started on port 5000");
});
