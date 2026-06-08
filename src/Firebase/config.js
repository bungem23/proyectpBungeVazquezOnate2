import app from 'firebase/app';
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIXFHzdjiou0uSpbtxqMfdgXTuJbQ_iDg",
  authDomain: "proyectoreactnative-294bf.firebaseapp.com",
  projectId: "proyectoreactnative-294bf",
  storageBucket: "proyectoreactnative-294bf.firebasestorage.app",
  messagingSenderId: "131325224147",
  appId: "1:131325224147:web:734574153eaf29c9422026"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth(app)
export const db = app.firestore(app)