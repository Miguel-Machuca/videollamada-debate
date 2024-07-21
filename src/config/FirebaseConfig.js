// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYmtYDBTdxXpk3WZjdvBNrC6N_UFQDGWo",
  authDomain: "videollamada-debate.firebaseapp.com",
  projectId: "videollamada-debate",
  storageBucket: "videollamada-debate.appspot.com",
  messagingSenderId: "224743731754",
  appId: "1:224743731754:web:0ee37d7b5b7f374bc10953",
  measurementId: "G-5K1WETJFEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage=getStorage(app);

export {
    app,
    auth,
    analytics,
    db,
    storage
}