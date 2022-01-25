import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUgS1div2P87WQtVd7NesiseWYXPwOh-0",
  authDomain: "vue-firebase-9a128.firebaseapp.com",
  projectId: "vue-firebase-9a128",
  storageBucket: "vue-firebase-9a128.appspot.com",
  messagingSenderId: "173154819387",
  appId: "1:173154819387:web:575f3a309fbdf9091c2b1e",
};

firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
export { projectFireStore, timeStamp, projectAuth };
