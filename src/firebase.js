// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnpY6G_I8Z_ChgDPTBkZxNAhbQShUeClg",
  authDomain: "shopatnus-c2166.firebaseapp.com",
  projectId: "shopatnus-c2166",
  storageBucket: "shopatnus-c2166.appspot.com",
  messagingSenderId: "332335483771",
  appId: "1:332335483771:web:0080843016982d14c4cbde",
  measurementId: "G-32LB1K9WY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const q = query(collection(db, "products"));
const querySnapshot = await getDocs(q);
window.addEventListener('load', () => {
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.data());
  });
});






export { auth }
export default app;
export { db };