import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDTWi0sW1tCEwIETBk2UGd64UOWbgg4wE",
    authDomain: "buenascosas-9bd21.firebaseapp.com",
    projectId: "buenascosas-9bd21",
    storageBucket: "buenascosas-9bd21.appspot.com",
    messagingSenderId: "480811166921",
    appId: "1:480811166921:web:c43acf7dcc24b3cd373118"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };