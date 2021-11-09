import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFqhRYdhh1dqp7V_Hh4GXIRMljc4kedQ8",
    authDomain: "devtraining-2ec83.firebaseapp.com",
    projectId: "devtraining-2ec83",
    storageBucket: "devtraining-2ec83.appspot.com",
    messagingSenderId: "642377465042",
    appId: "1:642377465042:web:1d406a78a39f30d5a8c10b",
    measurementId: "G-7W7TK0VXJN"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const todo = db.collection("Todo");

export { firebase, todo }