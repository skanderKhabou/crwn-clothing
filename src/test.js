import { firestore } from "./firebase/firebase.utils";

firestore
  .collection("users")
  .doc("gE0XOLLCnTo6Xy1AebyQ")
  .collection("cartItems")
  .doc("USMjxMxzxoWqF3CnOFjt");

// we can write the query like this also
firestore.doc("users/gE0XOLLCnTo6Xy1AebyQ/cartItems/USMjxMxzxoWqF3CnOFjt");

//if we want just the collection of the cart items
firestore.collection("users/gE0XOLLCnTo6Xy1AebyQ/cartItems");
