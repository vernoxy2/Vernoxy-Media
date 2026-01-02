// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUJY3MJuYmDwriz_VtF4fkjcGhBQcX78M",
  authDomain: "vernoxy-media.firebaseapp.com",
  projectId: "vernoxy-media",
  storageBucket: "vernoxy-media.firebasestorage.app",
  messagingSenderId: "29003109920",
  appId: "1:29003109920:web:f3115a221f201a04434e45",
  measurementId: "G-8PKSEKJVM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;