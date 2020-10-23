import firebase from 'firebase'
// import 'firebase/database'
// import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCrR-NqWTVkKYd4ZkL-DyPWdvlWEEZFyl0",
    authDomain: "olx-clone-19db5.firebaseapp.com",
    databaseURL: "https://olx-clone-19db5.firebaseio.com",
    projectId: "olx-clone-19db5",
    storageBucket: "olx-clone-19db5.appspot.com",
    messagingSenderId: "1044929948176",
    appId: "1:1044929948176:web:d64e963953d0e71424b895",
    measurementId: "G-HXC67QVH0K"
  };
  // Initialize Firebase
export default  firebase.initializeApp(firebaseConfig);