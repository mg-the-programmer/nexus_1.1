const express = require("express");
const users = require("./users.json");
const app = express();

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
