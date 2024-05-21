import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDzUNdfvGvirgeHuuqjFssv1tBZffZl0EY",
  authDomain: "react-firebase-auth-42e6b.firebaseapp.com",
  projectId: "react-firebase-auth-42e6b",
  storageBucket: "react-firebase-auth-42e6b.appspot.com",
  messagingSenderId: "7243288693",
  appId: "1:7243288693:web:853f66ac6e35e5b9faa83c"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
 const auth=firebase.auth();
 const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider=new firebase.auth.FacebookAuthProvider();

export {auth,googleAuthProvider,facebookAuthProvider};
