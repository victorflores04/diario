import firebase  from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDoZ94VjCFgKY2qeYvpzfNgGS44Y3k6hu4",
    authDomain: "diario-95d22.firebaseapp.com",
    projectId: "diario-95d22",
    storageBucket: "diario-95d22.appspot.com",
    messagingSenderId: "295278916559",
    appId: "1:295278916559:web:5bc03e17e1d5c916b058ba",
    measurementId: "G-QFX167BQVZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
      db,
      googleAuthProvider,
      firebase
  }