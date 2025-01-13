import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const API_KEY =  import.meta.env.VITE_GIPHY_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "netflix-gpt-981a3.firebaseapp.com",
  projectId: "netflix-gpt-981a3",
  storageBucket: "netflix-gpt-981a3.firebasestorage.app",
  messagingSenderId: "419538516372",
  appId: "1:419538516372:web:be60646f9f577827e17781",
  measurementId: "G-G2ZZT75VMM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const analytics = getAnalytics(app);

export { auth, googleProvider };