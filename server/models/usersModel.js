// create the user model
//
// import the necessary modules
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

// create a user schema
const userRegister = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  accountType: { type: String, required: true },
});

//create a user login
const userLogin = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

//create a user schema for login authentication
userLogin.plugin(passportLocalMongoose);

// create a user model
const signedupUsers = mongoose.model("signedupUsers", userRegister);

// create a user model for login authentication
const signedinUsers = mongoose.model("signedinUsers", userLogin);

// exports the two models to be used in the auth.js file
//one exports the user model for signup
//the other exports the user model for login authentication
module.exports = { signedupUsers, signedinUsers };
