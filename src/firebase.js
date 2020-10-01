import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFbdwzmRFcaTHy2wTNEMLs1GLrIkyUA5o",
  authDomain: "clone-c42ad.firebaseapp.com",
  databaseURL: "https://clone-c42ad.firebaseio.com",
  projectId: "clone-c42ad",
  storageBucket: "clone-c42ad.appspot.com",
  messagingSenderId: "277690537012",
  appId: "1:277690537012:web:6df0a73a9eceeead312661",
  measurementId: "G-MY75KCX6QX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
