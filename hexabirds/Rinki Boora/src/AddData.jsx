import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';

const AddData = () => {
  const [data, setData] = useState({ Name: '', Class: '', Roll: '', City: '' });
  const { id } = useParams();
  const [imgae, setImgae] = useState(null)

  const navigate = useNavigate();

  async function dataall() {
    const docRef = doc(db, 'list', id);
    const docSnap = await getDoc(docRef);
    setData(docSnap.data());
    console.log(docSnap, 'docsnap');
  }
  useEffect(() => {
    dataall();
  }, []);
  const handleFileChange = (e) => {
    setImgae(e.target.files[0])
    
  }

  // async function HandleData(e) {
  //   e.preventDefault();

  //   if (id) {
  //     setDoc(doc(db, 'list', id));
  //   } else {
  //     const docRef = addDoc(collection(db, 'list'), data);
  //     console.log(docRef);
  //   }
  //   setData({ Name: '', Class: '', Roll: '', City: '' });
  //   setTimeout(() => {
  //     navigate('/');
  //   }, 5000);
  // }

  async function HandleData(e) {
    e.preventDefault();

    if (id) {
      await setDoc(doc(db, 'list', id), data);
    } else {
      await addDoc(collection(db, 'list'), data);
    }
    setData({ Name: '', Class: '', Roll: '', City: '' });
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  function changeHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <div className="bg-danger m-auto mt-5 px-5 py-5 h-50 w-25 ps-5">
        <form onSubmit={HandleData}>
          <h4 className="fw-medium fs-5">Name</h4>
          <input
            className=" mt-3"
            name="Name"
            value={data.Name}
            onChange={changeHandler}
            type="text"
          />
          <h4 className="fw-medium fs-5">Class</h4>
          <input
            className=" mt-3"
            name="Class"
            value={data.Class}
            onChange={changeHandler}
            type="text"
          />
          <h4 className="fw-medium fs-5">Roll</h4>
          <input
            className=" mt-3"
            name="Roll"
            value={data.Roll}
            onChange={changeHandler}
            type="text"
          />
          <h4 className="fw-medium fs-5">City</h4>
          <input
            className=" mt-3"
            name="City"
            value={data.City}
            onChange={changeHandler}
            type="text"
          />
          <div>
            <input type="file" onChange={handleFileChange} />
          </div>

          <button className="mt-3 bg-black text-white border-0 px-3 py-1" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddData;
