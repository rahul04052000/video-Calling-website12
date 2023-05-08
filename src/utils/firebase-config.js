import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAWTv5NijrziaXIYY1Sr6Sr36Uqa_4_41c",
  authDomain: "react-movie-clone-eb94e.firebaseapp.com",
  projectId: "react-movie-clone-eb94e",
  storageBucket: "react-movie-clone-eb94e.appspot.com",
  messagingSenderId: "513145923094",
  appId: "1:513145923094:web:b0a6405d36a5abc6697737",
  measurementId: "G-SHJYZBPEWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const firebaseAuth=getAuth(app);
