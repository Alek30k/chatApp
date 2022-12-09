import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6A4HBe-QpyzdXuzJ7UMf3S5PK54WjiXI",
  authDomain: "chat2-1b079.firebaseapp.com",
  projectId: "chat2-1b079",
  storageBucket: "chat2-1b079.appspot.com",
  messagingSenderId: "521993079446",
  appId: "1:521993079446:web:003c0c6083d2b5e5ed10b7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
