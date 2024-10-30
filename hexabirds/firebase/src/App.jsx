import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let value = [];
    async function getdata() {
      const querySnapshot = await getDocs(collection(db, 'students'));
      querySnapshot.forEach((doc) => {
        value.push({ id: doc.id, alldata: doc.data() });
        setData(value);
      });
    }
    getdata();
  }, []);
  return (
    <div>
      {data.map((items) => {
        return (
          <div>
            <h2>{items.alldata.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default App;
