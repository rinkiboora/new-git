import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDPuQGVzZmaz_PSX01w1McoPMwxX85E8uw',
  authDomain: 'my-project-bca06.firebaseapp.com',
  projectId: 'my-project-bca06',
  storageBucket: 'my-project-bca06.appspot.com',
  messagingSenderId: '626574623296',
  appId: '1:626574623296:web:3060f92d234cf2b61155a5',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
