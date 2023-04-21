const express = require("express");
const router = express.Router();
const Message = require("../models/messageModel");

router.use(express.json());

router.post("/message", (req, res) => {
  const { message, name, timestamp, received } = req.body;
  const newMessage = new Message({
    message: message,
    name: name,
    timestamp: timestamp,
    received: received,
  });

  newMessage.save((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// router.get("/message", (req, res) => {
//   Message.find({}, (err, messages) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(messages);
//     }
//   });
// });

module.exports = router;
