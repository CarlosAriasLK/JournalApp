// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log( import.meta.env )

// DEV/Prod
const firebaseConfig = {
  apiKey: "AIzaSyDrU7ndRd676dZeh1gjfQh4UU-1v8ewSqU",
  authDomain: "journalapp-39e8b.firebaseapp.com",
  projectId: "journalapp-39e8b",
  storageBucket: "journalapp-39e8b.firebasestorage.app",
  messagingSenderId: "607957120698",
  appId: "1:607957120698:web:421476d0748c3945c63483"
};

// Testing
/* const firebaseConfig = {
  apiKey: "AIzaSyDfAtjpxQJiz9sxDOxJpkeN1J2gKyY1uZU",
  authDomain: "test-react-journal-48a69.firebaseapp.com",
  projectId: "test-react-journal-48a69",
  storageBucket: "test-react-journal-48a69.firebasestorage.app",
  messagingSenderId: "431383830827",
  appId: "1:431383830827:web:a1053122f473dcc9f0256e"
}; */

// Initialize Firebase
export const FirebaseApp  = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );

