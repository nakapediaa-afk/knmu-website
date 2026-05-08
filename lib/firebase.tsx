import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7vGDdyXiP928idapY66GKUvYuLbEu8tk",
  authDomain: "knmu-website.firebaseapp.com",
  projectId: "knmu-website",
  storageBucket: "knmu-website.firebasestorage.app",
  messagingSenderId: "695500016000",
  appId: "1:695500016000:web:f67f59af1e3453ecaed965"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);