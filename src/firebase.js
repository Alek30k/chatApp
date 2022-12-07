import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAndhhdx7v7QQQfwd6Oc_Y5naklcKL2xdQ",
  authDomain: "chat-9def3.firebaseapp.com",
  projectId: "chat-9def3",
  storageBucket: "chat-9def3.appspot.com",
  messagingSenderId: "294752542182",
  appId: "1:294752542182:web:621d7e9c20964ec44dca27",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
