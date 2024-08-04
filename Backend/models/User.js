const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String },
    email: { type: String, required: true },
    password: { type: String },
    avatar: { type: String, required: false },
    isAdmin: { type: Boolean, required: false },
    gId: { type: String },
    // refreshTokens:{type:String},
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
