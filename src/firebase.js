import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBbIrN20oMhVika7XyH-uYtONLJkIIxVuM",
  authDomain: "taxi-booking-15bc6.firebaseapp.com",
  projectId: "taxi-booking-15bc6",
  storageBucket: "taxi-booking-15bc6.appspot.com",
  messagingSenderId: "1016706156926",
  appId: "1:1016706156926:web:86226a1b2ef92e1569cb2f",
  measurementId: "G-16MLDS0PQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
