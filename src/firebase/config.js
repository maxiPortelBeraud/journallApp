import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAtdAVUwFzhGT2lmtSgog8rhJXsrIiKEpo",
  authDomain: "react-journall-app-6f093.firebaseapp.com",
  projectId: "react-journall-app-6f093",
  storageBucket: "react-journall-app-6f093.appspot.com",
  messagingSenderId: "882307576952",
  appId: "1:882307576952:web:9583c94803cf5cf37e298d",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
