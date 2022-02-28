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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // will always give us a reference even if the user doesn t exist uf it does not exist we will save it in the db

  const snapShot = await userRef.get();
  // this will give us documentsnapshot and exist attribut to check if the id exist or not and also the searcher id in id field
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      // we use crud rest method in a reference to save delete update a  data with set put etc ...
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
  // to take a snapshot from a ref we use the get method on the reference
};

//we use documentRef to perform Crud operation like set get update delete or add document to collection with add
// document ref returns document snapshotobject

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
