// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm83KQ-LGHH8MZ4X8ub_oiP4jTguWEFoI",
  authDomain: "learning-management-syst-63e64.firebaseapp.com",
  projectId: "learning-management-syst-63e64",
  storageBucket: "learning-management-syst-63e64.firebasestorage.app",
  messagingSenderId: "992392137064",
  appId: "1:992392137064:web:474f6799af5daee5c7eedd",
  measurementId: "G-T52J2LNRV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);