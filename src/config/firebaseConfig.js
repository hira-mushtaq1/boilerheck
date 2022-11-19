// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn_MCs_ZBdoCPH7r02FacOB8kO9spBdyg",
  authDomain: "hackathon-c6559.firebaseapp.com",
  projectId: "hackathon-c6559",
  storageBucket: "hackathon-c6559.appspot.com",
  messagingSenderId: "833133342532",
  appId: "1:833133342532:web:ef23bc952061743b50f111",
  measurementId: "G-NP7M9FYK2J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
