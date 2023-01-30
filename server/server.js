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
  data.push({ id: 5, name: "New User" });
  fs.writeFile("./users.json", JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    }
  });

  // fs.writeFileSync("data.json",  JSON.stringify(data));

  res.json({ message: "success" });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
