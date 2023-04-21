const mongoose = require("mongoose");
const ogs = require("open-graph-scraper");

const projectSchema = new mongoose.Schema({
  creator: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  previewImage: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  tags: {
    type: [String],
  },
  url: {
    type: String,
  },
  creator_id: { type: String },
});

module.exports = mongoose.model("Project", projectSchema);
