// Import the functions you need from the SDKs you need

import firebase from "firebase/app"
import "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7kSW35f6hEQ13EDaFg_0Xyp-uEUzfafM",
  authDomain: "otp-react-13da6.firebaseapp.com",
  projectId: "otp-react-13da6",
  storageBucket: "otp-react-13da6.appspot.com",
  messagingSenderId: "752403068483",
  appId: "1:752403068483:web:772234bd36ecaed67d46f6"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
export {auth , firebase};

// Initialize Firebase
