// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel"));

// app.listen(3000, () => console.log("Server ready on port 3000."));

// module.exports = app;

const express = require("express");
const app = express();
//const dotEnv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("../router/userRouter");
const Post = require("../router/postRouter");
// const path = require("path");
const Comments = require("../router/commentsRouter");

app.use(cors());

app.use(bodyParser.json());

//dotEnv.config({path:"./env/.env"});             process.env.MONGO_DB_CLOUD_URL

//const port = precess.env.PORT || 5000;
// const port = 8000;

mongoose
  .connect(
    "mongodb+srv://lakshaymuseum123:okfTpSgVpZbBFvQk@cluster0.bp2mxmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then((response) => {
    console.log("Connected to Mongo");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// if(process.env.NODE_ENV === "production"){

// }
app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/api/users", User);
// //app.use("/api/profiles",require("./router/profileRouter"));
app.use("/api/posts", Post);
app.use("/api/comments", Comments);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
