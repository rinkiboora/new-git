import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqrBHP3_69vAHm1gF2wP3cDgE4gEkr19Y',
  authDomain: 'card-project-a7c40.firebaseapp.com',
  projectId: 'card-project-a7c40',
  storageBucket: 'card-project-a7c40.appspot.com',
  messagingSenderId: '1034950116951',
  appId: '1:1034950116951:web:3c24b50fd6b4a7cd8f4512',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
