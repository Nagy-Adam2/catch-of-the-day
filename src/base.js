/* npm install re-base firebase@^4.8.0 --save --legacy-peer-deps */
import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBzupERYBR28k-TA2pVjaUaoaFQOvn6-cM",
  authDomain: "catch-of-the-day-naworks.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-naworks-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;