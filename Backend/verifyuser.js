const axios = require("axios");
const jwt = require("jsonwebtoken");

// const fs = require("fs");
// const path = require("path");
const admin = require("firebase-admin");
const getFirebaseAdmin = async () => {
  console.log(admin);
  if (admin.apps.length) {
    return admin;
  }
  try {
    const response = await axios.get(
      "https://res.cloudinary.com/lakshaythegupta/raw/upload/v1722778158/jira-clone-3636c-firebase-adminsdk-9l4hy-aa153f956b.json"
    );
    const serviceAccountKey = response.data;
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountKey),
    });
    return admin;
  } catch (error) {
    console.error("Error fetching service account key:", error);
    throw error;
  }
};
// const verify = (req, res, next) => {
//   //console.log("hello");
//   const authHeader = req.headers.authorization;

//   if (authHeader) {
//     const token = authHeader.split(" ")[1];

//     jwt.verify(token, "mysecretkey", (err, user) => {
//       if (err) {
//         console.log(err);
//         return res.status(403).json("Token is not valid!");
//       }

//       req.user = user;
//       console.log(user);
//       next();
//     });
//   } else {
//     res.status(401).json("You are not authenticated!");
//   }
// };

// module.exports = verify;

module.exports = async function verify(req, res, next) {
  const authheader = req.headers?.authorization;
  if (!authheader) return res.status(401).json("You are not authenticated!");
  const token = authheader?.split(" ")[1];

  const authType = req.headers?.authtype;
  //   var ans = { username: "", userId: "" };
  if (authType === "google") {
    console.log("google " + token);
    const decodedToken = await getFirebaseAdmin().then((admin) => {
      return admin.auth().verifyIdToken(token);
    });

    if (decodedToken) {
      req.user = {
        ...req.user,
        username: decodedToken.name,
        gId: decodedToken.uid,
      };
      next();
    }
  }

  if (authType === "jwt") {
    console.log("jwt");
    jwt.verify(token, "mysecretkey", (err, user) => {
      if (err) {
        console.log(err);
        return res.status(403).json("Token is not valid!");
      }

      req.user = user;
      next();
    });
  }

  //   return res.status(401).json("You are not authenticated!");

  //   next();
  //   return ans;
};
