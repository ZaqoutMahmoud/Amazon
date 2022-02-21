import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAZQJn48b1BlRMJWsql7CxilET3VjYbvVI",
  authDomain: "fir-f6cff.firebaseapp.com",
  projectId: "fir-f6cff",
  storageBucket: "fir-f6cff.appspot.com",
  messagingSenderId: "1007924000299",
  appId: "1:1007924000299:web:fed4b3147b6c5543219c6e",
  measurementId: "G-Y3L9CKDDHX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
