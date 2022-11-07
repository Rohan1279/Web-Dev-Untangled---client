// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcI0RSyNVr8GUe2kxJOec4pduGMQpI1LM",
  authDomain: "web-dev-untangled-client.firebaseapp.com",
  projectId: "web-dev-untangled-client",
  storageBucket: "web-dev-untangled-client.appspot.com",
  messagingSenderId: "142936887178",
  appId: "1:142936887178:web:4e835adbf028ee5a154273",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
