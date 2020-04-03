import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCVp7BySj4IP11yTBtdufad-sFgoyY4Z94",
  authDomain: "smartframe-vp.firebaseapp.com",
  databaseURL: "https://smartframe-vp.firebaseio.com",
  projectId: "smartframe-vp",
  storageBucket: "smartframe-vp.appspot.com",
  messagingSenderId: "1046514046677",
  appId: "1:1046514046677:web:f7d72184ed4c9060b9b45c"
};

firebase.initializeApp(firebaseConfig)
export default firebase;