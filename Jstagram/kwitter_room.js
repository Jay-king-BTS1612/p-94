
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSTrGRqCgImK3umz0u-XjiISxS-yCWRB4",
  authDomain: "jstagram-3-july-2023.firebaseapp.com",
  databaseURL: "https://jstagram-3-july-2023-default-rtdb.firebaseio.com",
  projectId: "jstagram-3-july-2023",
  storageBucket: "jstagram-3-july-2023.appspot.com",
  messagingSenderId: "616753986304",
  appId: "1:616753986304:web:5edc76836be549083cd1e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
