import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDIM7610HjKEb0PJZnn5WykGh6mKZ0Hzqo",
    authDomain: "wheres-waldo-a04d0.firebaseapp.com",
    projectId: "wheres-waldo-a04d0",
    storageBucket: "wheres-waldo-a04d0.appspot.com",
    messagingSenderId: "443874397938",
    appId: "1:443874397938:web:8b2b5f155b75bdfb740a6b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;