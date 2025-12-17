// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { data } from "react-router-dom";
const firebaseConfig = {
  apiKey: "AIzaSyActD0EHaQm5f1flHKovqVPrDssI11elyA",
  authDomain: "netflix-clone-fdb63.firebaseapp.com",
  projectId: "netflix-clone-fdb63",
  storageBucket: "netflix-clone-fdb63.firebasestorage.app",
  messagingSenderId: "189759922024",
  appId: "1:189759922024:web:ee88c6ce875abb88f700dd",
  measurementId: "G-DMKVY7WLG1",
  databaseURL:"https://netflix-clone-fdb63-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};