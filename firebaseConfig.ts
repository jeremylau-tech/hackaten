import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTmd6kIA7Kl6t7HhjQHYZxcpcty6bGqUQ",
  authDomain: "health-d075a.firebaseapp.com",
  projectId: "health-d075a",
  storageBucket: "health-d075a.appspot.com",
  messagingSenderId: "413332989770",
  appId: "1:413332989770:web:993632cae7ef5082e503b3",
  measurementId: "G-D9N0Z1614V"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

