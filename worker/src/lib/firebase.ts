import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {}

export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
