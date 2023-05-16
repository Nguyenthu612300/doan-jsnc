import { initializeApp } from "firebase/app";
import {
    getAuth
} from 'firebase/auth';
import {
    getFirestore
} from 'firebase/firestore';



import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGBD2DH5JR5Hh4EIFatlITjWnWANnNN7I",
  authDomain: "web-firebase-b9a77.firebaseapp.com",
  projectId: "web-firebase-b9a77",
  storageBucket: "web-firebase-b9a77.appspot.com",
  messagingSenderId: "806212898913",
  appId: "1:806212898913:web:22aeededeae3425b95da20",
  measurementId: "G-WRDFYZM1VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getFirestore();
const auth = getAuth();

export { db, auth };
