import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDofw4qboqawY3ESLZntAsw_y_o1WltA0Q",
  authDomain: "messenger-clone-42c61.firebaseapp.com",
  databaseURL: "https://messenger-clone-42c61.firebaseio.com",
  projectId: "messenger-clone-42c61",
  storageBucket: "messenger-clone-42c61.appspot.com",
  messagingSenderId: "712531688772",
  appId: "1:712531688772:web:18b1f365f5a0db74e4ab11",
  measurementId: "G-FVTNW322QE",
});

const db = firebaseApp.firestore();

export default db;
