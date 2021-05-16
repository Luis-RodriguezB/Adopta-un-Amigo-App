import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBj0mxnx-jcWiFS7b4UX9JJzcOeZFv6yNA",
  authDomain: "proyecto-dis-movil.firebaseapp.com",
  projectId: "proyecto-dis-movil",
  storageBucket: "proyecto-dis-movil.appspot.com",
  messagingSenderId: "992748633627",
  appId: "1:992748633627:web:0b2aa48d1b064508b4c2be",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { firebase, db };