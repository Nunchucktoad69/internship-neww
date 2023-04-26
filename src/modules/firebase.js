import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBF0d2UYNE72RDikzmhTx8w629bIEr4lxU",
  authDomain: "umesh-firebase.firebaseapp.com",
  projectId: "umesh-firebase",
  storageBucket: "umesh-firebase.appspot.com",
  messagingSenderId: "716454461822",
  appId: "1:716454461822:web:1bfb860ec8d7cdf2c3332f",
  measurementId: "G-ESLH1D6XT8",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
