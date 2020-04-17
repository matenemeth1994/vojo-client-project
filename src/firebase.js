import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWWXmfelvp__0sELZ504wWIM4DvZj5Utw",
  authDomain: "vojo-bbe4f.firebaseapp.com",
  databaseURL: "https://vojo-bbe4f.firebaseio.com",
  projectId: "vojo-bbe4f",
  storageBucket: "vojo-bbe4f.appspot.com",
  messagingSenderId: "601250537917",
  appId: "1:601250537917:web:07338e0caaa4243f5632d4",
  measurementId: "G-3WNT25N3J8"
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();

export default firebase;
