// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo4TbeQwNOvwwKrTdxPlbt-9ZOwBDnj3U",
  authDomain: "fir-auth-33090.firebaseapp.com",
  projectId: "fir-auth-33090",
  storageBucket: "fir-auth-33090.appspot.com",
  messagingSenderId: "881029116659",
  appId: "1:881029116659:web:ca6dffe6613980677efd86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)