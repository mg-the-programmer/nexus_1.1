const express = require("express");
// const users = require("./users.json");
const bodyParser = require("body-parser");
const fs = require("fs");
let data = JSON.parse(fs.readFileSync("./users.json"));
const app = express();
app.use(bodyParser.json());

app.get("/users", (req, res) => {
  res.send(data);
});

app.post("/users", (req, res) => {
  const { name, age } = req.body;
  data.push({ name, age });
  fs.writeFileSync("data.json", JSON.stringify(data));
  res.json({ message: "success" });
  s;
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
