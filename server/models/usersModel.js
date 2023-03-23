// create the user model
//
// import the necessary modules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a user schema
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  accountType: { type: String, required: true },
});

// create a user model
const signedupUsers = mongoose.model("signedupUsers", userSchema);

// export the user model

module.exports = signedupUsers;
