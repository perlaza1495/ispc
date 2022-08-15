import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCyeQeOdBOIN37C32V0jysj4hkFB3WkfKQ",
  authDomain: "ispc-svelte.firebaseapp.com",
  projectId: "ispc-svelte",
  storageBucket: "ispc-svelte.appspot.com",
  messagingSenderId: "181903289422",
  appId: "1:181903289422:web:bea2767d42b402dc68271f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)