import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyB7w1yZS3ukVrK3zHnpcmmD08uA-TNObkA',
  authDomain: 'projet-project.firebaseapp.com',
  projectId: 'projet-project',
  storageBucket: 'projet-project.appspot.com',
  messagingSenderId: '691652448791',
  appId: '1:691652448791:web:1fbf3341d4166b35508252',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
