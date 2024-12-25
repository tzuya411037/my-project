// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB91BNGYr3c6Er0GQkdIT2MAXBtmtrzbSs",
  authDomain: "clockinapp2412.firebaseapp.com",
  databaseURL: "https://clockinapp2412-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clockinapp2412",
  storageBucket: "clockinapp2412.firebasestorage.app",
  messagingSenderId: "114343282705",
  appId: "1:114343282705:web:5659a6b42e3d64f98f49b0",
  measurementId: "G-2E0PRCKL3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get};