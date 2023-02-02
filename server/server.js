const express = require("express");
const bodyParser = require("body-parser");

const fs = require("fs");
let data = JSON.parse(fs.readFileSync("./users.json"));

const app = express();
const port = process.env.PORT || 5000;
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
  const { firstName, lastName, email, phone, password, accountType } = req.body;
  data.push({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    password: password,
    accountType: accountType,
  });
  fs.writeFile("./users.json", JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.json({ message: "success" });
});

app.listen(port, () => {
  console.log("Server started on port 5000");
});
