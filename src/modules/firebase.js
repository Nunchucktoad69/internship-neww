import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBF0d2UYNE72RDikzmhTx8w629bIEr4lxU",
  authDomain: "umesh-firebase.firebaseapp.com",
  projectId: "umesh-firebase",
  storageBucket: "umesh-firebase.appspot.com",
  messagingSenderId: "716454461822",
  appId: "1:716454461822:web:1bfb860ec8d7cdf2c3332f",
  measurementId: "G-ESLH1D6XT8",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
