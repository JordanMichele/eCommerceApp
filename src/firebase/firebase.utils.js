import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD0kJpJpRVoUBTdm4O0vJb4L6_H8WBDs7Y",
  authDomain: "crwn-db-e1124.firebaseapp.com",
  databaseURL: "https://crwn-db-e1124.firebaseio.com",
  projectId: "crwn-db-e1124",
  storageBucket: "",
  messagingSenderId: "664284242063",
  appId: "1:664284242063:web:c2228a896c580372c710fa",
  measurementId: "G-592GR0LX55"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
