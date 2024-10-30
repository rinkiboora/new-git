import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import img from './assets/img/gril.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate();
  const [names, setName] = useState([]);
  async function getdata() {
    let value = [];
    const querySnapshot = await getDocs(collection(db, 'list'));
    querySnapshot.forEach((doc) => {
      value.push({ id: doc.id, alldata: doc.data() });
      setName(value);
      console.log(value, 'hidhdjis');
    });
  }
  useEffect(() => {
    getdata();
  }, []);
  async function Remov(id) {
    await deleteDoc(doc(db, 'list', id));
    let removData = names.filter((use) => use.id !== id);
    setName(removData);
    const notify = () => toast('delete data !');
    notify();
  }

  return (
    <>
      <Link to={`/AddData`}>
        <button className="ms-3 pe-4 ps-4 pt-2 pb-2 bg-danger text-white border-0">Data</button>
      </Link>
      <div>
        <div className=" container-fluid">
          <div className=" row">
            {names.map((items, i) => (
              <div key={i} className=" col-4 mt-3">
                <div className=" bg-danger pt-4 pb-4 text-center w-75">
                  <img className=" w-75 " src={img} alt="" />
                  <h3 className=" text-black "> Name:{items.alldata.Name}</h3>
                  <button
                    onClick={() => Remov(items.id)}
                    className=" ps-4 pe-4 bg-black text-white border-0 py-1">
                    Delete
                  </button>
                  <Link className=" text-decoration-none border-2" to={`/Ditel/${items.id}`}>
                    <button className=" ps-4 pe-4 ms-3 bg-black text-white border-0 py-1">
                      Data
                    </button>
                  </Link>
                  <Link to={`/AddData/update/${items.id}`}>
                    <button className=" ps-4 pe-4 ms-3 bg-black text-white border-0 py-1">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default App;
