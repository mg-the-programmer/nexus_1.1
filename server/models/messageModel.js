// create a schema for messages
const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

const Message = mongoose.model("message", messageSchema);

module.exports = Message;
