import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';

const RealtimeSet = () => {
  const [getdata, setGetdata] = useState([]);
  const db = getDatabase();

  const fetchData = () => {
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const Alldata = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        setGetdata(Alldata);
      } else {
        setGetdata([]);
      }
    });
  };

  const HanlerDelete = (id) => {
    const deleteRef = ref(db, 'users/' + id);
    remove(deleteRef);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {getdata.map((item, i) => (
        <div key={i}>
          <h3>Name: {item.username}</h3>
          <h3>Email: {item.email}</h3>
          <button onClick={() => HanlerDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RealtimeSet;
