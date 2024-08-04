import axios from "axios";

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
      "https://res.cloudinary.com/lakshaythegupta/raw/upload/v1718831181/auctiongram-signin-firebase-adminsdk-6gyeb-f5aa71fc8d.json"
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

export default getFirebaseAdmin;
