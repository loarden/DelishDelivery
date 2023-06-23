// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_4U8ZWYm9oPF7ZbVwBYEdugT1vi_Smaw",
  authDomain: "delishdelivery-e1cc9.firebaseapp.com",
  projectId: "delishdelivery-e1cc9",
  storageBucket: "delishdelivery-e1cc9.appspot.com",
  messagingSenderId: "493473571403",
  appId: "1:493473571403:web:c89d3ef273ba707d84e3ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app