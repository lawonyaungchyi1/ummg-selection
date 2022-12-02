// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDewWJg1qpuICs2Se0sZQfuzXlUMNpCVw4",
  authDomain: "ummg-selection-foundatio-5952a.firebaseapp.com",
  projectId: "ummg-selection-foundatio-5952a",
  storageBucket: "ummg-selection-foundatio-5952a.appspot.com",
  messagingSenderId: "698429858042",
  appId: "1:698429858042:web:936c2368173b0848a92943",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
