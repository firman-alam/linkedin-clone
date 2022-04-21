import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6aOoskqnr2gZO4kEf3QxsAp-vXSFOWHg",
  authDomain: "linkedin-clone-6d508.firebaseapp.com",
  projectId: "linkedin-clone-6d508",
  storageBucket: "linkedin-clone-6d508.appspot.com",
  messagingSenderId: "954042664095",
  appId: "1:954042664095:web:3190275036b82d2124ceaa",
};

// init firebase app
initializeApp(firebaseConfig);

// init service
const db = getFirestore();

// auth
const auth = getAuth();

export { db, auth };
