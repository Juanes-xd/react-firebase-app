// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8gwBbD2M6_XVUA2bLKVuEyOBZ1caY-pc",
  authDomain: "react-fb-app-32a67.firebaseapp.com",
  projectId: "react-fb-app-32a67",
  storageBucket: "react-fb-app-32a67.appspot.com",
  messagingSenderId: "749580254013",
  appId: "1:749580254013:web:0af8c2058d78642600a354",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
