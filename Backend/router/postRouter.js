var express = require("express");
var router = express.Router();
const Post = require("../models/Post");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

//verifying the user
const verify = (req, res, next) => {
  //console.log("hello");
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "mysecretkey", (err, user) => {
      if (err) {
        console.log(err);
        return res.status(403).json("Token is not valid!");
      }

      req.user = user;
      console.log(user);
      next();
    });
  } else {
    res.status(401).json("You are not authenticated!");
  }
};

//creating a new post
router.post("/setpost", verify, async (req, res) => {
  try {
    if (req.body.username == req.user.name) {
      const title = req.body.title;
      const description = req.body.description;

      const _id = mongoose.Types.ObjectId();
      var post = await new Post({
        _id,
        user: req.user._id,
        title,
        description,
        status: 0,
      });

      await post.save();

      return res.send(post);
    } else console.log("Not Allowed");
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: [{ msg: error.message }] });
  }
});

//deleting a post
router.post("/deleteTask", verify, async (req, res) => {
  console.log(req.user.name + " " + req.body.user);

  if (req.user.name == req.body.user) {
    await Post.deleteOne({
      // _id:`ObjectId("${req.body.id}")`,
      _id: req.body._id,
    })
      .then(() => {
        return res.status(200).json("Post Deleted");
      })
      .catch((err) => {});
  } else {
    res.status(403).json("You cannot delete this post");
  }
});

//send all the posts
// router.get("/userTasks", verify, async (req, res) => {
//   console.log({ poda: req.user });
//   try {
//     await Post.find(
//       { user: req.user._id },
//       null,
//       function (err, successResponse) {
//         if (err) {
//           return res.send("Error while accessing the data");
//         } else {
//           return res.send(successResponse);
//         }
//       }
//     );
//   } catch (error) {
//     console.log(error);
//     res.send("Error while accessing the data");
//   }
// });
router.get("/userTasks", verify, async (req, res) => {
  console.log({ poda: req.user });
  try {
    const posts = await Post.find({ user: req.user._id }).exec();
    return res.send(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error while accessing the data" });
  }
});

//update posts
router.post("/updateTask", verify, async (req, res) => {
  if (req.body.username == req.user.name) {
    const updatedTask = req.body;
    Post.findByIdAndUpdate(req.body._id, updatedTask, function (err, response) {
      if (err) res.send("Error while accessing the data");
      return res.send(response);
    });
  }
});

module.exports = router;
