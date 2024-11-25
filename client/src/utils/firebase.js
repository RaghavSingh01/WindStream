// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "windstream-b7589.firebaseapp.com",
  projectId: "windstream-b7589",
  storageBucket: "windstream-b7589.firebasestorage.app",
  messagingSenderId: "141840252258",
  appId: "1:141840252258:web:f52d69e19e5c388ec5803b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);