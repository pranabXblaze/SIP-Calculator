// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZZVFTPb7HQq_DBTWAYpxeEPZFk0j2srU",
  authDomain: "personal-projects-5d57b.firebaseapp.com",
  projectId: "personal-projects-5d57b",
  storageBucket: "personal-projects-5d57b.appspot.com",
  messagingSenderId: "818285142637",
  appId: "1:818285142637:web:5040e4157f067b6096d564",
  measurementId: "G-6RB7K42W0E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
