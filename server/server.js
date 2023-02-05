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

app.post("/users", (req, res) => {
  const { mail, pass } = req.body;
  // data.push({ mailid: mail, password: pass });
  // fs.writeFile("./users.json", JSON.stringify(data), (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // });

  // fs.writeFileSync("data.json",  JSON.stringify(data));

  res.json({ message: "success" });
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

  // data.push({
  //   firstName: firstName,
  //   lastName: lastName,
  //   email: email,
  //   phone: phone,
  //   password: password,
  //   accountType: accountType,
  // });
  // fs.writeFile("./users.json", JSON.stringify(data), (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // });
  res.json({ message: "success" });
});

app.listen(port, () => {
  console.log("Server started on port 5000");
});
