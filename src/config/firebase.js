import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB_4uEOo8VjHr1ToRgwluayUR-Bme6Qfig",
  authDomain: "sharethoughts-f0217.firebaseapp.com",
  databaseURL: "https://sharethoughts-f0217.firebaseio.com",
  projectId: "sharethoughts-f0217",
  storageBucket: "sharethoughts-f0217.appspot.com",
  messagingSenderId: "176410131357",
  appId: "1:176410131357:web:ae6c01d04cc25a0d014d74",
  measurementId: "G-1KB4SYS16R"
}
firebase.initializeApp(firebaseConfig);
export default{
    firestore: firebase.firestore(),
    auth:firebase.auth()
};
