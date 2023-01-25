import { useInRouterContext } from "react-router-dom";

// Add the Firebase products that you want to use
require("firebase/compat/auth");
require("firebase/compat/firestore");
var firebase = require("firebase/compat/app");
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";



  const firebaseConfig = {
    apiKey: "AIzaSyBXcpywDh8IAlwubCmIRp3rTd6NKjILd2w",
    authDomain: "expex-14177.firebaseapp.com",
    projectId: "expex-14177",
    storageBucket: "expex-14177.appspot.com",
    messagingSenderId: "310745792028",
    appId: "1:310745792028:web:5930a34e77e5969590e9d9",
    measurementId: "G-HGNTK2LL0E"
  };
  
 
  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore()
  export const auth = getAuth(app);

module.exports = db

