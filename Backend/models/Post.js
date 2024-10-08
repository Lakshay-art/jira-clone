const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    guser: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Number },
    // username: { type: String, required: true },

    // comments:[
    //
    // ]
  },
  { timestamps: true }
);

const Post = mongoose.model("post", PostSchema);
module.exports = Post;
