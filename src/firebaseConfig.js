// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc8h5GPadHcQR66tUtsStJDjq237kwdAg",
  authDomain: "onlinecourse-d2dad.firebaseapp.com",
  projectId: "onlinecourse-d2dad",
  storageBucket: "onlinecourse-d2dad.appspot.com",
  messagingSenderId: "845002099155",
  appId: "1:845002099155:web:d920334cf57ff2d4794726"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
