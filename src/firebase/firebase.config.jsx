// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfu9RouZsBgAwQO4mIZpzF3gBd0x1D4NA",
  authDomain: "hit-institute-client.firebaseapp.com",
  projectId: "hit-institute-client",
  storageBucket: "hit-institute-client.appspot.com",
  messagingSenderId: "1094869684985",
  appId: "1:1094869684985:web:f09d12a3f840deed9a4828"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;