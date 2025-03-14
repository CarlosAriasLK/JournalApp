// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrU7ndRd676dZeh1gjfQh4UU-1v8ewSqU",
  authDomain: "journalapp-39e8b.firebaseapp.com",
  projectId: "journalapp-39e8b",
  storageBucket: "journalapp-39e8b.firebasestorage.app",
  messagingSenderId: "607957120698",
  appId: "1:607957120698:web:421476d0748c3945c63483"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );

export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
