// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwrEpfXT_z9MuNpybF-bfwkPXll1-r6X4",
  authDomain: "test-d430c.firebaseapp.com",
  projectId: "test-d430c",
  storageBucket: "test-d430c.appspot.com",
  messagingSenderId: "760117692048",
  appId: "1:760117692048:web:860ff29644fafd43627a15",
  measurementId: "G-N0X3FMEG4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default app