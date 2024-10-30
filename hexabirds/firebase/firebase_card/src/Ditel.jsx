import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const Ditel = () => {
  const [user, setUser] = useState('');
  const { id } = useParams();
  console.log(id, 'id');
  async function singleData() {
    const docRef = doc(db, 'stutent', id);
    const docSnap = await getDoc(docRef);
    setUser(docSnap.data());
    console.log(docSnap, 'docsnap');
  }
  useEffect(() => {
    singleData();
  }, []);
 
  return (
    <div>
      <div className=" bg-black h-75 w-25 text-center pt-3 pb-3 text-white m-auto mt-5  ">
        <h2>Name : {user.Name}</h2>
        <h2 className=" pt-2 pb-2">Class : {user.Class}</h2>
        <h2>Roll : {user.Roll}</h2>
      </div>
    </div>
  );
};

export default Ditel;
