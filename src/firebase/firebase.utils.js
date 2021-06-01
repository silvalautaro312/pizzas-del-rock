import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config =
{
    apiKey: "AIzaSyD4Q0NF_WheMQ_0b45TmmhVLnCcjS2bATc",
    authDomain: "pizzas-del-rock.firebaseapp.com",
    projectId: "pizzas-del-rock",
    storageBucket: "pizzas-del-rock.appspot.com",
    messagingSenderId: "272467899111",
    appId: "1:272467899111:web:11eb05af5ecdcd8f5f6842",
    measurementId: "G-PBMBV4HMBE"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();