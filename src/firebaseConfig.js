// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA5vj4NFXEPYAdBDbH0aGzp32lKBu-1pLo",
    authDomain: "algepro-trad.firebaseapp.com",
    projectId: "algepro-trad",
    storageBucket: "algepro-trad.appspot.com",
    messagingSenderId: "61261112303",
    appId: "1:61261112303:web:a6f2ef0dbce79857c8cc1a"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };