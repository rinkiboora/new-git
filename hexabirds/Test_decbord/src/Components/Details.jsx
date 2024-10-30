import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

const Details = () => {
  const [users, setUser] = useState('');
  const { id } = useParams();
  console.log(id, 'id');
  async function dataall(id) {
    const docRef = doc(db, 'Product', id);
    const docSnap = await getDoc(docRef);
    setUser(docSnap.data());
    console.log(docSnap.data(), 'docsnap');
  }
  console.log(users, 'usere');
  useEffect(() => {
    dataall();
  }, []);
  return (
    <div>
      <h2>Details</h2>
      <div>
        <div className=" container-fluid  m-auto h-25 w-25 mt-5 text-black py-4 px-5">
          <h2>Product: {users.Product}</h2>
          <h2>Short: {users.Short}</h2>
          <h2> Description: {users.Description}</h2>
          <h2> pin: {users.pin}</h2>
        </div>
      </div>
    </div>
  );
};

export default Details;
