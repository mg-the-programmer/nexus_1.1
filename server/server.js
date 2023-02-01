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
  const { mail, pass } = req.body;
  data.push({ mailid: mail, password: pass });
  fs.writeFile("./users.json", JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    }
  });

  // fs.writeFileSync("data.json",  JSON.stringify(data));

  res.json({ message: "success" });
});

app.post("/users/signup", (req, res) => {
  const { data } = req.body;
  data.push({ data });
  fs.writeFile("./users.json", JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
