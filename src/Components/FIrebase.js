// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkn2wKxu8Cb1q1VOKj9f5P1hV20iMu42c",
  authDomain: "kickstarter-web17.firebaseapp.com",
  projectId: "kickstarter-web17",
  storageBucket: "kickstarter-web17.appspot.com",
  messagingSenderId: "600024832331",
  appId: "1:600024832331:web:02a0a7455dbeb6690cb0ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);