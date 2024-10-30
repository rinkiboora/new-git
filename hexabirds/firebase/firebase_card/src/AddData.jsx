import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddData = () => {
  const [data, setData] = useState({ Name: '', Class: '', Roll: '' });
  const navgite = useNavigate();
  async function HandeleData(e) {
    e.preventDefault();

    if (data.Name !== '' && data.Class !== '' && data.Roll !== '') {
      const docRef = await addDoc(collection(db, 'stutent'), data);
      toast.success('success full !');
      try {
        setTimeout(() => {
          navgite('/');
        }, 3000);
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.info('All field are required !');
    }
  }
  function ChangeHandele(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className=" container-fluid m-auto h-50 w-25 bg-black pt-2 mt-5 pb-5 ps-5">
        <form onSubmit={HandeleData}>
          <h5 className=" text-white">Name</h5>
          <input name="Name" value={data.Name} onChange={ChangeHandele} type="text" /> <br />
          <h5 className=" text-white">Class</h5>
          <input name="Class" value={data.Class} onChange={ChangeHandele} type="text" /> <br />
          <h5 className=" text-white">Roll</h5>
          <input name="Roll" value={data.Roll} onChange={ChangeHandele} type="text" /> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddData;
