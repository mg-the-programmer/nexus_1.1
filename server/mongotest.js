const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/nexusdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  strictQuery: false,
});

// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully!");
// });

// connection.on("error", (error) => {
//   console.log(error);
// });

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

const Blog = mongoose.model("Blog", blogSchema);

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
