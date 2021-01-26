
import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDZ6PrLQ5yhazPryYDMCJpt5O5IJqsB1DI",
  authDomain: "wily1-45d3f.firebaseapp.com",
  projectId: "wily1-45d3f",
  storageBucket: "wily1-45d3f.appspot.com",
  messagingSenderId: "12864846850",
  appId: "1:12864846850:web:bde0284c27fe7760fa3b1b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()