// create a freelancer model for mongodb

// import the necessary modules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a freelancer schema
const freelancerSchema = new Schema({
  name: { type: String },
  email: { type: String },
  skills: { type: [String] },
  rate: { type: String },
  isAvailable: { type: Boolean },
  jobTitle: { type: String },
  description: { type: String },
  jobSuccess: { type: Number },
  experience: { type: String },
  githubLink: { type: String },
  darkMode: { type: Boolean },
  // set a default value for darkMode
});

// create a freelancer model
const freelancer = mongoose.model("freelancer", freelancerSchema);

// export the freelancer model
module.exports = freelancer;
