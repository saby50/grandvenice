import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  
  apiKey: "AIzaSyDMJ2t3cgqYrLBt8sZUNlqTSQfaGn2tPM8",
  authDomain: "grandvenice-8a0f9.firebaseapp.com",
  databaseURL: "https://grandvenice-8a0f9-default-rtdb.firebaseio.com",
  projectId: "grandvenice-8a0f9",
  storageBucket: "grandvenice-8a0f9.appspot.com",
  messagingSenderId: "616035135555",
  appId: "1:616035135555:web:2ff336d64a7758bbb224f6"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//igesia-v1
//npm run build;  firebase deploy --project igesia-v1

export default firebase;
