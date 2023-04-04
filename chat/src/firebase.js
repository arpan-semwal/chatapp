
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import{getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA0TMBIauLokGq31ZUYEgIvV1KlNIvDcZY",
  authDomain: "mychatapp-2c83d.firebaseapp.com",
  projectId: "mychatapp-2c83d",
  storageBucket: "mychatapp-2c83d.appspot.com",
  messagingSenderId: "837076273130",
  appId: "1:837076273130:web:96ef6defce1eaf87429493"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);