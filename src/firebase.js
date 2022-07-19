// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIM7610HjKEb0PJZnn5WykGh6mKZ0Hzqo",
  authDomain: "wheres-waldo-a04d0.firebaseapp.com",
  projectId: "wheres-waldo-a04d0",
  storageBucket: "wheres-waldo-a04d0.appspot.com",
  messagingSenderId: "443874397938",
  appId: "1:443874397938:web:8b2b5f155b75bdfb740a6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);