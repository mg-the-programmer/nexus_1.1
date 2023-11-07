const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const session = require("express-session");
//use the ejs view engine
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

const uri =
  "mongodb+srv://manigandanc2003:manigandanc2003@cluster0.jtlnbvg.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: "https://nexus-freelance.azurewebsites.net/",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("./client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.use("/", require("./routes/users"));
app.use("/", require("./routes/freelancer"));

app.listen(port, () => {
  console.log("Server started on port 5000");
});
