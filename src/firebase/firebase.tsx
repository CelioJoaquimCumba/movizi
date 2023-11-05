// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWSP1hPKuJq_LNmryI8OksHNRq2N6_tnw",
  authDomain: "movizi.firebaseapp.com",
  projectId: "movizi",
  storageBucket: "movizi.appspot.com",
  messagingSenderId: "316567891669",
  appId: "1:316567891669:web:a033a09d8a6e89c87cbc5c",
  measurementId: "G-FBEXZJXY4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)