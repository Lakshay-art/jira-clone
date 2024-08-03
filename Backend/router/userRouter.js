const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post("/refresh", (req, res) => {
  const refreshToken = req.body.token;

  if (!refreshToken) return res.status(401).json("You are not authenticated!");
  jwt.verify(refreshToken, "myrefreshsecretkey", (err, user) => {
    err && console.log(err);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
});

const generateAccessToken = (user) => {
  return jwt.sign(
    { _id: user._id, fname: user.fname, isAdmin: user.isAdmin },
    "mysecretkey",
    {
      expiresIn: "100s",
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { _id: user._id, fname: user.fname, isAdmin: user.isAdmin },
    "myrefreshsecretkey",
    {
      expiresIn: "10000s",
    }
  );
};

router.post(
  "/register",
  [
    body("fname").notEmpty().withMessage("Name is Required"),
    body("lname").notEmpty().withMessage("Name is Required"),
    body("email").notEmpty().withMessage("Email is Required"),
    body("password").notEmpty().withMessage("Password is Required"),
  ],
  async (request, response) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    try {
      let { fname, lname, email, password } = request.body;
      let user = await User.findOne({ email: email });
      if (user) {
        return response.status(401).json({
          errors: [
            {
              msg: "User Already Exists",
            },
          ],
        });
      }

      let salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      user = await new User({ fname, lname, email, password });
      await user.save();
      await response.status(200).json({ msg: "Registered" });
    } catch (error) {
      console.log(error);
      await response.status(500).json({ errors: [{ msg: error.message }] });
    }
  }
);

router.post(
  "/login",
  [
    body("email").notEmpty().withMessage("Email is Required"),
    body("password").notEmpty().withMessage("Password is Required"),
  ],
  async (request, response) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    try {
      let { email, password } = request.body;
      //console.log(email,password);
      let user = await User.findOne({ email: email });
      if (!user) {
        return response.status(404).send("This email is not registered");
      }

      let correctPassword = await bcrypt.compare(password, user.password);
      if (!correctPassword) {
        return response.status(401).send("Incorrect password or email id");
      } else {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        return response.json({
          id: user._id,
          name: user.fname + user.lname,
          isAdmin: user.isAdmin,
          accessToken,
          refreshToken,
        });
      }
    } catch (error) {
      console.log(error);
      response.status(500).json({ errors: [{ msg: error.message }] });
    }
  }
);

router.post("/glogin", async (req, res) => {
  let { userId, username, email, profilePic } = req.body;
  try {
    await dbConnect();
    let user = await User.findOne({ userId: userId });
    if (!user) {
      const newuser = new User({ userId, username, email, profilePic });
      await newuser.save();
      res.status(200).send(newuser);
    }
    res.status(200).send(user);
    return;
  } catch (err) {
    res.status(401).send(err);
    return;
  }
});

module.exports = router;
