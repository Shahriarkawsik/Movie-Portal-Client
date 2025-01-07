// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5OeB_OcVxXaVEZ8kutoMsAWYZrMBIciM",
  authDomain: "movie-portal-abed2.firebaseapp.com",
  projectId: "movie-portal-abed2",
  storageBucket: "movie-portal-abed2.firebasestorage.app",
  messagingSenderId: "36514346681",
  appId: "1:36514346681:web:14250a8b7dc14df7c94d68",
  measurementId: "G-DDJDLVTTLW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
