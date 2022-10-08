import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3fNWMNeLAGVHEhH7f8yBFPjX33bw39SY",
  authDomain: "finance-project-8cb6b.firebaseapp.com",
  projectId: "finance-project-8cb6b",
  storageBucket: "finance-project-8cb6b.appspot.com",
  messagingSenderId: "1035551285542",
  appId: "1:1035551285542:web:84205a3e9099f1fdea21e7",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
