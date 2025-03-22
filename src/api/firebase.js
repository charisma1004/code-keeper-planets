// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Firebase Authentication (v9+)
import { getDatabase } from 'firebase/database';
import {getStorage} from 'firebase/storage'


// Add your Firebase configuration here
const firebaseConfig = {
  apiKey: "AIzaSyBKPKvIMKqpUxBu4Uv4vYcB11t4cid3yTA",
  authDomain: "test-platnet.firebaseapp.com",
  projectId: "test-platnet",
  storageBucket: "test-platnet.firebasestorage.app",
  databaseURL: "https://test-platnet-default-rtdb.firebaseio.com/",
  messagingSenderId: "903027758011",
  appId: "1:903027758011:web:0ec8110b9e11254dba6a9e",
  measurementId: "G-66SH8Y01EZ"
};

// Initialize Firebase for the client-side (v9+)
const app = initializeApp(firebaseConfig);


// Get Firebase Auth and Firestore (for client-side)
const auth = getAuth(app);
const database = getDatabase(app);


// Exporting for use in your app
export { auth, database };