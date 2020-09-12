import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyBD1MXly8Hv8UgJEtRoxg_QUy4KBtaEDUw",
  authDomain: "clone-75239.firebaseapp.com",
  databaseURL: "https://clone-75239.firebaseio.com",
  projectId: "clone-75239",
  storageBucket: "clone-75239.appspot.com",
  messagingSenderId: "104652421873",
  appId: "1:104652421873:web:aa42ef8ca2731da0ffc750",
  measurementId: "G-6X0NWREJV8",
});

const auth = firebase.auth();

export { auth };
