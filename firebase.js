// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw3MxFer0qOJdW1rWRWQXxcKR763HRx4g",
  authDomain: "netflix-gpt-981a3.firebaseapp.com",
  projectId: "netflix-gpt-981a3",
  storageBucket: "netflix-gpt-981a3.firebasestorage.app",
  messagingSenderId: "419538516372",
  appId: "1:419538516372:web:be60646f9f577827e17781",
  measurementId: "G-G2ZZT75VMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const analytics = getAnalytics(app);

export { auth, googleProvider };