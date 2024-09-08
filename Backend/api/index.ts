const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const User = require("../router/userRouter")
const Post = require("../router/postRouter")

const allowedOrigins = [
  "https://jira-clone-btbv.vercel.app",
  "https://jira-clone-kohl.vercel.app",
  "http://localhost:3000",
]

const corsOptions = {
  origin: function (origin, callback) {
    console.log("Origin:", origin)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
}
app.use(cors(corsOptions))

app.use(bodyParser.json())

mongoose
  .connect(
    "mongodb+srv://lakshaymuseum123:okfTpSgVpZbBFvQk@cluster0.bp2mxmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then((response) => {
    console.log("Connected to Mongo")
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

app.use("/api/users", User)
app.use("/api/posts", Post)

app.listen(8000)

module.exports = app
