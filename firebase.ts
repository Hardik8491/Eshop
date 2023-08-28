import firebase from "firebase/compat/app";
import { initializeApp, getApp } from "firebase/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDN-xRBCrqtAVqlbBSu6dIKhWcBql1uOaM",
  authDomain: "eshop-45865.firebaseapp.com",
  projectId: "eshop-45865",
  storageBucket: "eshop-45865.appspot.com",
  messagingSenderId: "979014586013",
  appId: "1:979014586013:web:0e2c52ee84254554244e74",
  measurementId: "G-94C7S1M3NX",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
// const app = initializeApp(firebaseConfig);
// Database
// firebase.initializeApp(firebaseConfig);
// const database = firebase.firestore();

// export {  database };
const db = app.firestore();
export default db;
