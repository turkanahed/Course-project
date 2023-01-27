const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const { Schema } = mongoose;

const CourseSchema = new Schema(
  {
    url: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
    authorUrl: {
      type: String,
    },
    content: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("/course", CourseSchema);

//get all products
app.get("/course", (req, res) => {
  Course.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

//add product
app.post("/course", (req, res) => {
  let newCourse = new Course({
    url: req.body.url,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    authorUrl: req.body.authorUrl,
    content: req.body.content,
    description: req.body.description,
  });
  newCourse.save();
  res.send({ message: "Successfully" });
});

//delete product
app.delete("/course/:id", (req, res) => {
  const { id } = req.params;
  Course.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("Successfully deleted");
    } else {
      res.status(500).json({ message: err });
    }
  });
});

mongoose.set("strictQuery", false);

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);

mongoose.connect(DB, (err) => {
  if (err) {
    console.log("Db connected");
  }
});

app.listen(PORT, () => {
  console.log(`App is up and running http://localhost:${PORT}/`);
});
