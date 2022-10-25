
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfr1NHnvghhx3tGjxrigyrgZkaqHF5UGM",
  authDomain: "house-marketplace-app-6c9c8.firebaseapp.com",
  projectId: "house-marketplace-app-6c9c8",
  storageBucket: "house-marketplace-app-6c9c8.appspot.com",
  messagingSenderId: "780348887394",
  appId: "1:780348887394:web:82b1e4a79d8873057d1c3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();