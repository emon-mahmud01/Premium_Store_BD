// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCtAcyQm6_WzClO-I-aRtdHLZ45SZu3F1A',
  authDomain: 'premium-store-bd.firebaseapp.com',
  projectId: 'premium-store-bd',
  storageBucket: 'premium-store-bd.appspot.com',
  messagingSenderId: '331588175511',
  appId: '1:331588175511:web:0c3eadebd35e7cef7a8bd2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
