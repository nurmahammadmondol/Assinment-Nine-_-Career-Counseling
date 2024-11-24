// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCwmC9B4kxOQgyoYIJOufWF-LSyJm6VoBA',
  authDomain: 'career-counseling-c4226.firebaseapp.com',
  projectId: 'career-counseling-c4226',
  storageBucket: 'career-counseling-c4226.firebasestorage.app',
  messagingSenderId: '395779231270',
  appId: '1:395779231270:web:19c8185c99ede17558e0e7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
