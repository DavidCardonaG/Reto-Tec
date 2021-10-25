import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { FacebookAuthProvider } from '@firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCelh8f3uiKIj3q5h-JZXtWh-RdOew8a9w",
  authDomain: "clima-5cbcc.firebaseapp.com",
  projectId: "clima-5cbcc",
  storageBucket: "clima-5cbcc.appspot.com",
  messagingSenderId: "663139859833",
  appId: "1:663139859833:web:fd8d89f8548470000cc3a8",
  measurementId: "G-LLYM5V7SEL"
};
 
const app = initializeApp(firebaseConfig);
const facebook = new FacebookAuthProvider()
const google =  new GoogleAuthProvider();
const db = getFirestore(app)

 
export{  
    app,
    google,
    db,
    facebook
}