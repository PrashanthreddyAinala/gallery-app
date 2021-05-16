import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDgOae3f6GW4jbNiiVNtx5plw3rKSPQaEc",
  authDomain: "mygallery-1ee64.firebaseapp.com",
  projectId: "mygallery-1ee64",
  storageBucket: "mygallery-1ee64.appspot.com",
  messagingSenderId: "49882539356",
  appId: "1:49882539356:web:4676a593e778d0054f4d99"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const dataStorage = firebase.storage();

  const dataFirestore = firebase.firestore();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {dataFirestore, dataStorage, timestamp};