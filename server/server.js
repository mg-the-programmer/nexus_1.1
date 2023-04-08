const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
//use the ejs view engine
const ejs = require("ejs");
const path = require("path");

// const cookieParser = require("cookie-parser");

const uri =
  "mongodb+srv://manigandan:manigandan@cluster0.oyky4iz.mongodb.net/nexusdb";

// use cookie
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// const Schema = mongoose.Schema;

const app = express();
const port = process.env.PORT || 5000;


// use session
app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

//use cors to allow cross origin resource sharing
//use cors allow the requests to go to backend from the frontend
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
//use express session to maintain session data

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));
//use the freelance.js file for all the freelancer related routes
app.use("/", require("./routes/freelancer"));

//use the ejs view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//use the users.js file for all the user related routes
app.use("/", require("./routes/users"));



//use the auth.js file for all the authentication related routes
// app.use("/", require("./routes/auth"));

app.listen(port, () => {
  console.log("Server started on port 5000");
});
