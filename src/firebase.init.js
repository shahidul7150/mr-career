// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH4mtifnPDALW6iV0wtFlDD5gucd7EjEA",
  authDomain: "mr-career.firebaseapp.com",
  projectId: "mr-career",
  storageBucket: "mr-career.appspot.com",
  messagingSenderId: "783552436915",
  appId: "1:783552436915:web:1c772dd75469dd38faaec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;