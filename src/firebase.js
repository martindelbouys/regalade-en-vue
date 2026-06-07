import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZCnDMK7MQzo4azJzbzf2rkVq42vTYkrA",
  authDomain: "regalade-996c4.firebaseapp.com",
  projectId: "regalade-996c4",
  storageBucket: "regalade-996c4.firebasestorage.app",
  messagingSenderId: "692750479436",
  appId: "1:692750479436:web:1923e29c0a71ab2427c4e9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
