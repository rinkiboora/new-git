import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB1oEL-lLXOTVUtc2QOARDLEsjafM1cTUw',
  authDomain: 'my-first-project-16564.firebaseapp.com',
  projectId: 'my-first-project-16564',
  storageBucket: 'my-first-project-16564.appspot.com',
  messagingSenderId: '893974140391',
  appId: '1:893974140391:web:a4ae975f00cecbd77d9942',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
