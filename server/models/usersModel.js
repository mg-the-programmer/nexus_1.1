const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userRegister = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  accountType: { type: String, required: true },
});

userRegister.plugin(passportLocalMongoose);

const signedupUsers = mongoose.model("signedupUsers", userRegister);

module.exports = signedupUsers;
