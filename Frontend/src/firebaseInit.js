// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkOvrSQ0Z8HvtOZELLTLSXKm4IPqzR4bI",
  authDomain: "jira-clone-3636c.firebaseapp.com",
  projectId: "jira-clone-3636c",
  storageBucket: "jira-clone-3636c.appspot.com",
  messagingSenderId: "800256845702",
  appId: "1:800256845702:web:935f09a67a9fb33e00ae07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
