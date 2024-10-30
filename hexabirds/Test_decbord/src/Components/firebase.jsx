import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBrmtSnxqmlumXjiRdh3yOfXtudrCIepe0',
  authDomain: 'dataproject-62fe2.firebaseapp.com',
  projectId: 'dataproject-62fe2',
  storageBucket: 'dataproject-62fe2.appspot.com',
  messagingSenderId: '757998247581',
  appId: '1:757998247581:web:8edc38990a98eb269ebe74',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
