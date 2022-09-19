import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase



const firebaseConfig = {
  apiKey: "AIzaSyD8b8EH4I0TlefXO6rmzXRbT0skDVCnwog",
  authDomain: "projectchavz.firebaseapp.com",
  databaseURL: "https://projectchavz-default-rtdb.firebaseio.com",
  projectId: "projectchavz",
  storageBucket: "projectchavz.appspot.com",
  messagingSenderId: "20961634386",
  appId: "1:20961634386:web:e712192e62d80f8980178b",
  measurementId: "G-9HLE3D8N4J"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true})
  export default db;