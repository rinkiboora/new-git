import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import img from './assets/girl.avif';
import { Link } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Realtimeget from './Components/Realtimeget';

const App = () => {
  const [names, setName] = useState([]);
  async function getdata() {
    let value = [];
    const querySnapshot = await getDocs(collection(db, 'stutent'));
    querySnapshot.forEach((doc) => {
      value.push({ id: doc.id, alldata: doc.data() });
      setName(value);
      console.log(value, 'hidofkufijdxio');
    });
  }

  useEffect(() => {
    getdata();
  }, []);
  async function remove(id) {
    await deleteDoc(doc(db, 'stutent', id));
    let dataRemove = names.filter((user) => user.id !== id);
    setName(dataRemove);
    const notify = () => toast('delete data');
    notify();
  }
  return (
    <div>
      <div className=" container-fluid">
        <Link to={`/AddData`}>
          <button className=" bg-black text-white ms-5 mb-2 mt-2 py-1 px-3">Data</button>
        </Link>
        <div className=" row">
          {names.map((items, i) => (
            <div key={i} className="col-3 mb-4">
              <div className=" bg-black w-75  m-auto text-center  ">
                <img className=" w-75 h-75 pt-4 " src={img} alt="" />

                <h2 className=" pt-2 pb-2 text-white">Name:{items.alldata.Name}</h2>
                <button
                  className="mb-3  border-3 pt-1 pb-1 fs-6 fw-semibold  border-0 me-2"
                  onClick={() => remove(items.id)}>
                  Delete
                </button>
                <Link to={`/Ditel/${items.id}`}>
                  <button className=" mb-3  border-3 pt-1 pb-1 fs-6 fw-semibold  border-0">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
      <Realtimeget />
    </div>
  );
};

export default App;
