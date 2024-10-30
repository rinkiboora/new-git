import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBVHMRickIJwC2ZMQXGe9kfctgtzE3VJb0',
  authDomain: 'stroge-project.firebaseapp.com',
  projectId: 'stroge-project',
  storageBucket: 'stroge-project.appspot.com',
  messagingSenderId: '153035610630',
  appId: '1:153035610630:web:c5d9c7db6cefe74e5e0187',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;
