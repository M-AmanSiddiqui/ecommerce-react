
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCSXC30940gRCb69I8TUQttDQFikzubDaA",
  authDomain: "ecommerce-ff0fe.firebaseapp.com",
  projectId: "ecommerce-ff0fe",
  storageBucket: "ecommerce-ff0fe.appspot.com",
  messagingSenderId: "1084390665898",
  appId: "1:1084390665898:web:30d64a95e0d284fcdfead3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
