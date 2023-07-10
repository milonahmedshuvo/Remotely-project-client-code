// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhNMjqKyKMKLe-rhR3AYhUyCA5vOmxNe0",
  authDomain: "remotelyjobportalproject.firebaseapp.com",
  projectId: "remotelyjobportalproject",
  storageBucket: "remotelyjobportalproject.appspot.com",
  messagingSenderId: "111510481308",
  appId: "1:111510481308:web:a9173199adfe69e73ec059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app