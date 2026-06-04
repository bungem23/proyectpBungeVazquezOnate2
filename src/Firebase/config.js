// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIXFHzdjiou0uSpbtxqMfdgXTuJbQ_iDg",
  authDomain: "proyectoreactnative-294bf.firebaseapp.com",
  projectId: "proyectoreactnative-294bf",
  storageBucket: "proyectoreactnative-294bf.firebasestorage.app",
  messagingSenderId: "131325224147",
  appId: "1:131325224147:web:734574153eaf29c9422026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = app.firestore()