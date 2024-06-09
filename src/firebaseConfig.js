// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB9eyk2h_oJntaz1C8BXx6_UGLSRgGKBok",
    authDomain: "algepro-new-4a0cd.firebaseapp.com",
    projectId: "algepro-new-4a0cd",
    storageBucket: "algepro-new-4a0cd.appspot.com",
    messagingSenderId: "837238006391",
    appId: "1:837238006391:web:b6d360cf45e6fde7489c72"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };