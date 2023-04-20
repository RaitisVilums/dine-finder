import dotenv from "dotenv";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
// const firebaseConfig = {
//   apiKey: "AIzaSyDOIV0y8f9lQVD7Pwh8WHXlgziGYkXP0Ic",
//   authDomain: "dinefinder.firebaseapp.com",
//   projectId: "dinefinder",
//   storageBucket: "dinefinder.appspot.com",
//   messagingSenderId: "1017098058116",
//   appId: "1:1017098058116:web:11911935567791dc5805d1",
// };
