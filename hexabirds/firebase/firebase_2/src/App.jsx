import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const App = () => {
  const [name, setName] = useState();
  async function getdata() {
    const docRef = doc(db, 'stutent', 'BKvDtdP68FJDuMZVjv8C');
    const docSnap = await getDoc(docRef);
    console.log(docSnap, 'gkergkzerio');
    setName(docSnap.data().name);
  }
  useEffect(() => {
    getdata();
  }, []);
  return <div>{name}</div>;
};

export default App;
