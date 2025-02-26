// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-video-d5b95.firebaseapp.com",
  projectId: "ai-video-d5b95",
  storageBucket: "ai-video-d5b95.firebasestorage.app",
  messagingSenderId: "224470332365",
  appId: "1:224470332365:web:43d4923bdf654bffa94a84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
