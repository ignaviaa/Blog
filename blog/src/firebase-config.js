// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvvgibw2C_CNGCgN4jgkD0h--yAY_tAPw",
  authDomain: "ign-blog.firebaseapp.com",
  projectId: "ign-blog",
  storageBucket: "ign-blog.appspot.com",
  messagingSenderId: "195461369978",
  appId: "1:195461369978:web:4afb527530a5b2086debc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();