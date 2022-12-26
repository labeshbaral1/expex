
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

 
const firebaseConfig = {
    apiKey: "AIzaSyBXcpywDh8IAlwubCmIRp3rTd6NKjILd2w",
    authDomain: "expex-14177.firebaseapp.com",
    projectId: "expex-14177",
    storageBucket: "expex-14177.appspot.com",
    messagingSenderId: "310745792028",
    appId: "1:310745792028:web:5930a34e77e5969590e9d9",
    measurementId: "G-HGNTK2LL0E"
  };
  
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
 
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
 
 export {db, auth}

