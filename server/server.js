const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");
const cors = require("cors");

const uri =
  "mongodb+srv://manigandan:manigandan@cluster0.oyky4iz.mongodb.net/nexusdb";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const Schema = mongoose.Schema;

const app = express();
const port = process.env.PORT || 5000;

//use cors to allow cross origin resource sharing
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(bodyParser.json());

//use the freelance.js file for all the freelancer related routes
app.use("/", require("./routes/freelancer"));

//use the users.js file for all the user related routes
app.use("/", require("./routes/users"));

app.listen(port, () => {
  console.log("Server started on port 5000");
});
