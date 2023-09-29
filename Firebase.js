import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDsBq7I6-FBUDRGVfMNA42MMBRtdf-rRXE",
  authDomain: "my-new-project-23d1a.firebaseapp.com",
  databaseURL: "https://my-new-project-23d1a-default-rtdb.firebaseio.com",
  projectId: "my-new-project-23d1a",
  storageBucket: "my-new-project-23d1a.appspot.com",
  messagingSenderId: "607745008702",
  appId: "1:607745008702:web:c7bcd0b9300877794bdd6f"
};


const app = initializeApp(firebaseConfig);
export const database=getAuth(app)