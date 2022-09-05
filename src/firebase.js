import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCDWKCkOQlJAKc7Uc7Y_YiWuwPb-IfvRVo",
  authDomain: "the-mall-site.firebaseapp.com",
  databaseURL: "https://the-mall-site.firebaseio.com",
  projectId: "the-mall-site",
  storageBucket: "the-mall-site.appspot.com",
  messagingSenderId: "914860133718",
  appId: "1:914860133718:web:5b2a6c0abf117bbaa71af7",

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//igesia-v1
//npm run build;  firebase deploy --project igesia-v1

export default firebase;
