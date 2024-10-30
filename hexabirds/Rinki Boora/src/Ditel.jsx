import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

const Ditel = () => {
  const [user, setUser] = useState('');
  const { id } = useParams();
  console.log(id, 'id');
  async function dataall() {
    const docRef = doc(db, 'list', id);
    const docSnap = await getDoc(docRef);
    setUser(docSnap.data());
    console.log(docSnap, 'docsnap');
  }
  useEffect(() => {
    dataall();
  }, []);
  return (
    <div className=" container-fluid bg-danger m-auto h-25 w-25 mt-5 text-white py-4 px-5">
      <h2>Name: {user.Name}</h2>
      <h2>Class: {user.Class}</h2>
      <h2> Roll: {user.Roll}</h2>
      <h2> City: {user.City}</h2>
    </div>
  );
};

export default Ditel;
