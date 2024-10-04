import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe6pHWf5-Ck-BWTj6yLb2BrwpjmeLWEFI",
  authDomain: "fundingprograms-d66be.firebaseapp.com",
  projectId: "fundingprograms-d66be",
  storageBucket: "fundingprograms-d66be.appspot.com",
  messagingSenderId: "1024115015817",
  appId: "1:1024115015817:web:e1aba3025d3bfda289c658",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
