// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlySBYCLJnkf1USKl43hsD-EZ3odhgg3M",
  authDomain: "best-chef-clint-site.firebaseapp.com",
  projectId: "best-chef-clint-site",
  storageBucket: "best-chef-clint-site.appspot.com",
  messagingSenderId: "879783695225",
  appId: "1:879783695225:web:6e2d651c7328c9e55495a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app