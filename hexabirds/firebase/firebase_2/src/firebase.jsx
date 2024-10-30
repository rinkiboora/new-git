import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHvazGpWEEtS1Whpp-5tIKc-mWarqi-ao',
  authDomain: 'my-web-7dab6.firebaseapp.com',
  projectId: 'my-web-7dab6',
  storageBucket: 'my-web-7dab6.appspot.com',
  messagingSenderId: '934306975053',
  appId: '1:934306975053:web:54ee8f4e1394612ef0fb04',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
