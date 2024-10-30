import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { doc, deleteDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Get = () => {
  const [data, setData] = useState([]);

  async function getdata() {
    let value = [];
    const querySnapshot = await getDocs(collection(db, 'student-list'));
    querySnapshot.forEach((doc) => {
      value.push({ id: doc.id, alldata: doc.data() });
    });
    setData(value);
  }

  useEffect(() => {
    getdata();
  }, []);

  async function remo(id) {
    await deleteDoc(doc(db, 'student-list', id));
    setData((remove) => remove.filter((user) => user.id !== id));
  }

  return (
    <>
      <div className="row container-fluid">
        {data.map((items, i) => (
          <div key={i} className="col-3 bg-danger ms-4 mt-4 p-4 text-center">
            <h2>Name: {items.alldata.Name}</h2>
            <h2>Class: {items.alldata.Class}</h2>
            <h2>Roll: {items.alldata.Roll}</h2>
            <button onClick={() => remo(items.id)}>Remove</button>
            <Link to={`/singledata${items.id} `}>
              <button>Detils</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Get;
