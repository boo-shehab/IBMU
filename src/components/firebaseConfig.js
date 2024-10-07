// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE81rlHEfZPxWz6UfvXd2grfFFrGz-rpM",
  authDomain: "ibmu-4e64e.firebaseapp.com",
  projectId: "ibmu-4e64e",
  storageBucket: "ibmu-4e64e.appspot.com",
  messagingSenderId: "117476606921",
  appId: "1:117476606921:web:b2ac4861d649632cae1e18",
  measurementId: "G-J2773JSV2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Remove destructuring

export { db };
