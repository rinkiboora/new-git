import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBrmtSnxqmlumXjiRdh3yOfXtudrCIepe0',
  authDomain: 'dataproject-62fe2.firebaseapp.com',
  databaseURL: 'https://dataproject-62fe2-default-rtdb.firebaseio.com',
  projectId: 'dataproject-62fe2',
  storageBucket: 'dataproject-62fe2.appspot.com',
  messagingSenderId: '757998247581',
  appId: '1:757998247581:web:8edc38990a98eb269ebe74',
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
