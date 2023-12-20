// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcpExFkyZNHTccRkzy5OqBU8qcmlkPB4M",
  authDomain: "novos-convertidos-f968d.firebaseapp.com",
  projectId: "novos-convertidos-f968d",
  storageBucket: "novos-convertidos-f968d.appspot.com",
  messagingSenderId: "489391852216",
  appId: "1:489391852216:web:e0b0909689c47b167f824d",
  measurementId: "G-47ZGJ0MVDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);