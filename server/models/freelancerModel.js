// create a freelancer model for mongodb
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freelancerSchema = new Schema({
  name: { type: String },
  email: { type: String },
  skills: { type: [String] },
  rate: { type: Number },
  isAvailable: { type: Boolean },
  jobTitle: { type: String },
  description: { type: String },
  jobSuccess: { type: Number },
  experience: { type: String },
  githubLink: { type: String },
  darkMode: { type: Boolean },
  user_id: { type: String },
});

const freelancer = mongoose.model("freelancer", freelancerSchema);

module.exports = freelancer;
