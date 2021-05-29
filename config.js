import firebase from 'firebase'



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyASj4ezn0gzqqr2pFl2KW-vDmljj0uyHj4",
    authDomain: "attendence-240d3.firebaseapp.com",
    databaseURL: "https://attendence-240d3-default-rtdb.firebaseio.com",
    projectId: "attendence-240d3",
    storageBucket: "attendence-240d3.appspot.com",
    messagingSenderId: "273808312625",
    appId: "1:273808312625:web:25655d632a23af79ab0810",
    measurementId: "G-BCN3ZSQSBZ"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase.database();