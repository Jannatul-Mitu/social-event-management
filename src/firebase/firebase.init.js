// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFhHlGzV4Y8ORkWWSQQkSvQMhJNaQJgiI",
  authDomain: "social-event-management-8cdf2.firebaseapp.com",
  projectId: "social-event-management-8cdf2",
  storageBucket: "social-event-management-8cdf2.appspot.com",
  messagingSenderId: "409722465587",
  appId: "1:409722465587:web:226be6f70d59fab1b9e246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);