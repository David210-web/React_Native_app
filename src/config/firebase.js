// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlH0T-vArs4wIZ1jgtHMM8X265I7JaYYw",
  authDomain: "bdapputec.firebaseapp.com",
  databaseURL: "https://bdapputec-default-rtdb.firebaseio.com",
  projectId: "bdapputec",
  storageBucket: "bdapputec.appspot.com",
  messagingSenderId: "291073454471",
  appId: "1:291073454471:web:d968c7f24b2267081e6322",
  measurementId: "G-FZKWSVMW4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()


