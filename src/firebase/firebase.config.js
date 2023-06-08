// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHk-YMvRY_5EicKZpxUrdh00vzimhcTXU",
  authDomain: "sport-spark.firebaseapp.com",
  projectId: "sport-spark",
  storageBucket: "sport-spark.appspot.com",
  messagingSenderId: "955121949747",
  appId: "1:955121949747:web:c0db31ee55b4e562a25746"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;