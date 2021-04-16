import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA86OrdNftPgQM-z0PEokkvFJoI8wBHZpo",
    authDomain: "truegallery-ebd05.firebaseapp.com",
    projectId: "truegallery-ebd05",
    storageBucket: "truegallery-ebd05.appspot.com",
    messagingSenderId: "507630796640",
    appId: "1:507630796640:web:d9de7106ca5754d39ea805"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const dataStorage = firebase.storage();

  const dataFirestore = firebase.firestore();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {dataFirestore, dataStorage, timestamp};