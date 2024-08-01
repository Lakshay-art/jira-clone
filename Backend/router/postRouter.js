var express = require("express");
//const Post= require("../models/Post")
var router = express.Router();
const Post = require("../models/Post");
//var post=require("../models/Post")
//const User=require("../models/User");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Comments = require("../models/Comments");

//verifying the user
const verify = (req, res, next) => {
  //console.log("hello");
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "mysecretkey", (err, user) => {
      console.log(authHeader);
      if (err) {
        console.log(err);
        return res.status(403).json("Token is not valid!");
      }

      req.user = user;
      //console.log(user);
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

      res.send(post);
    } else console.log("Not Allowed");
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: [{ msg: error.message }] });
  }
});

//deleting a post
router.post("/deletepost", verify, async (req, res) => {
  console.log(req.user.name + " " + req.body.user);

  if (req.user.name == req.body.user) {
    await Comments.deleteMany({ postid: req.body.id })
      .then(() => {
        res.status(200);
      })
      .catch((err) => {});
    await Post.deleteOne({
      // _id:`ObjectId("${req.body.id}")`,
      _id: req.body.id,
    })
      .then(() => {
        res.status(200).json("Post Deleted");
      })
      .catch((err) => {});
  } else {
    res.status(403).json("You cannot delete this post");
  }
});

//send all the posts
router.get("/userTasks", async (req, res) => {
  console.log(req.user._id);
  try {
    await Post.find(
      { user: req.user._id },
      null,
      function (err, successResponse) {
        if (err) {
          res.send("Error while accessing the data");
        } else {
          res.send(successResponse);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

//update posts
router.post("/updateTask", verify, async (req, res) => {
  // console.log(req.body.username+" "+req.user.name);
  if (req.body.username == req.user.name) {
    const updatedTask = req.body;
    Post.findByIdAndUpdate(
      req.body.postid,
      updatedTask,
      function (err, response) {
        if (err) throw err;
        console.log(
          "--------like added to id" + req.body.postid + "-----------"
        );
      }
    );
  }
});

module.exports = router;
