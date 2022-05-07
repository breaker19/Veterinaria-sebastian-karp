
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD4R7hXmizEa_0BQ0bWh3vBA-pvwj0dQ6A",
  authDomain: "veterinaria-y-petshop.firebaseapp.com",
  projectId: "veterinaria-y-petshop",
  storageBucket: "veterinaria-y-petshop.appspot.com",
  messagingSenderId: "130940053320",
  appId: "1:130940053320:web:99ea0ef756612db64af57d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;