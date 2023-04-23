import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADBofd0fwjVVBX1Nj7dE-JXdh_xwXZRqQ",
  authDomain: "clone-ef205.firebaseapp.com",
  projectId: "clone-ef205",
  storageBucket: "clone-ef205.appspot.com",
  messagingSenderId: "886623473797",
  appId: "1:886623473797:web:eb4ddc781b9a46a8e559ec",
  measurementId: "G-01T4DK0NEG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
