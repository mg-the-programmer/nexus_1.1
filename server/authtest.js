const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

// mongoose.set("strictQuery", false);

const uri =
  "mongodb+srv://manigandan:manigandan@cluster0.oyky4iz.mongodb.net/nexusdb";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connect to Auth Testing");
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  accountType: String,
});

const signedInUsers = mongoose.model("signedInUsers", userSchema);

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

// create a post request to store sign in users email and password
app.post("/users/signin", (req, res) => {
  const { mail, pass, accountType } = req.body;
  const newuser = new signedInUsers({
    email: mail,
    password: pass,
    accountType: accountType,
  });
  newuser.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("user saved");
      res.json({ message: "success" });
    }
  });
});

app.listen(port, () => {
  console.log("Server started on port 5000");
});
