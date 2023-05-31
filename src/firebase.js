// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4SXUA6nyIkVQPOm2rsKj6q3Adaob9tJ8",
  authDomain: "leo-align.firebaseapp.com",
  projectId: "leo-align",
  storageBucket: "leo-align.appspot.com",
  messagingSenderId: "975274841559",
  appId: "1:975274841559:web:490f97003bd7819b3be792",
  measurementId: "G-QGNX4Z4Z06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);
