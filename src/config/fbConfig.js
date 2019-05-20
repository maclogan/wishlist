import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBL7SJsEj4Dl8Ea5_5YLEyOIaj36AaGxOc",
    authDomain: "wishlist-584de.firebaseapp.com",
    databaseURL: "https://wishlist-584de.firebaseio.com",
    projectId: "wishlist-584de",
    storageBucket: "wishlist-584de.appspot.com",
    messagingSenderId: "976733474387",
    appId: "1:976733474387:web:17b124305a17b7f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase