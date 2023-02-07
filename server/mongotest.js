const mongoose = require("mongoose");

const uri =
  "mongodb+srv://manigandan:manigandan@cluster0.oyky4iz.mongodb.net/nexusdb";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  accountType: String,
});

const signedupUsers = mongoose.model("signedupUsers", userSchema);

const newBlog = new Blog({
  title: "A new blog post",
  author: "John Doe",
  body: "The body of the blog post...",
});

newBlog.save((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Blog post saved successfully!");
  }
});
