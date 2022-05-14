// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXfyTdMImCUxwCvQuPUavL2sUSUvQxw-c",
  authDomain: "shaunakbookshop.firebaseapp.com",
  projectId: "shaunakbookshop",
  storageBucket: "shaunakbookshop.appspot.com",
  messagingSenderId: "367056432946",
  appId: "1:367056432946:web:520813ca0e12a05923712b",
  measurementId: "G-MSW7VZYWD8",
};

// Initialize Firebase
const auth = initializeApp(firebaseConfig);
const app = getAuth(auth);

export default app;
