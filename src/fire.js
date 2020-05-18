import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2W6xut7cYeDVLGzFbV8MoOeOE6vZ_u58",
  authDomain: "tagarela-chat-app.firebaseapp.com",
  databaseURL: "https://tagarela-chat-app.firebaseio.com",
  projectId: "tagarela-chat-app",
  storageBucket: "tagarela-chat-app.appspot.com",
  messagingSenderId: "669572248497",
  appId: "1:669572248497:web:e5221bbc1a44553b99c390",
  measurementId: "G-698GP4GHS7",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.analytics();

export const auth = firebaseApp.auth();
export const messageRef = firebaseApp.database().ref("messages");
export const roomRef = firebaseApp.database().ref("rooms");

export default firebaseApp;
