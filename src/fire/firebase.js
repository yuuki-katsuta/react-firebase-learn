//firebase APIの利用
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBXUMAvyYnweOtU4h4phsQT6fQNnERU1Bo",
  authDomain: "react-learn-243fa.firebaseapp.com",
  databaseURL: "https://react-learn-243fa.firebaseio.com",
  projectId: "react-learn-243fa",
  storageBucket: "react-learn-243fa.appspot.com",
  messagingSenderId: "748514389668",
  appId: "1:748514389668:web:3b1171a3e5f8a622ba4031",
  measurementId: "G-LZ4KJH62C7"
};
// Firebaseの初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
