import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
//database
import "firebase/compat/auth";
//auth

const config = {
  apiKey: "AIzaSyCkPHv4HeowUzZ8hbdB_uQdzjgY0WZFiVM",
  authDomain: "crwn-db-99e26.firebaseapp.com",
  projectId: "crwn-db-99e26",
  storageBucket: "crwn-db-99e26.appspot.com",
  messagingSenderId: "362022993205",
  appId: "1:362022993205:web:588942f38ed9718a2a207c",
  measurementId: "G-GTJV40Z294",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
