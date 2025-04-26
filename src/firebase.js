import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAsHlUuP9b6s78_JsWFbNegF6fuYs0Bss",
    authDomain: "todo-reactjs-c276b.firebaseapp.com",
    projectId: "todo-reactjs-c276b",
    storageBucket: "todo-reactjs-c276b.firebasestorage.app",
    messagingSenderId: "3165051656",
    appId: "1:3165051656:web:46ab92b6d1d68bf67eaabd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db   = firebaseApp.firestore();

export default db;

