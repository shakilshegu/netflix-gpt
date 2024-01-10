// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHFm-p4vBXqsVAOedX-YoJ5SkzpBoTEHk",
  authDomain: "netflix-gpt-2aa14.firebaseapp.com",
  projectId: "netflix-gpt-2aa14",
  storageBucket: "netflix-gpt-2aa14.appspot.com",
  messagingSenderId: "176946203465",
  appId: "1:176946203465:web:1b3d85b0686fe79f016898",
  measurementId: "G-SL2BGDDJCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();