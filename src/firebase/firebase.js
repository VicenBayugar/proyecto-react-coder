import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBinAL2G8VBOQ_OILjDb5xgivPqq7bKrj0",
  authDomain: "proyecto-react-coder-2aca9.firebaseapp.com",
  projectId: "proyecto-react-coder-2aca9",
  storageBucket: "proyecto-react-coder-2aca9.appspot.com",
  messagingSenderId: "503722071189",
  appId: "1:503722071189:web:a730217409457b6496f79c",
});
export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
