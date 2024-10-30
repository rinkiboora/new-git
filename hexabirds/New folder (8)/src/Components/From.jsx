import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icon2 from '../assets/img/Icons (1).png';
import icon3 from '../assets/img/Icons (3).png';
import icon4 from '../assets/img/img icon.png';
import btn from '../assets/img/btn_img.png';

const From = ({ setData, data, updateData, setUpdateData }) => {
  const navigate = useNavigate();
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [phone_no, setPhone_no] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  useEffect(() => {
    if (updateData !== null) {
      const item = data[updateData];
      setFirst_name(item.first_name);
      setLast_name(item.last_name);
      setEmail(item.email);
      setPhone_no(item.phone_no);
      setCity(item.city);
      setState(item.state);
    } else {
      setFirst_name('');
      setLast_name('');
      setEmail('');
      setPhone_no('');
      setCity('');
      setState('');
    }
  }, [updateData, data]);

  const handleData = (e) => {
    e.preventDefault();
    const allData = {
      first_name,
      last_name,
      email,
      phone_no,
      city,
      state,
    };
    if (updateData !== null) {
      const newData = [...data];
      newData[updateData] = allData;
      setData(newData);
      setUpdateData(null);
    } else {
      setData([...data, allData]);
    }
    fetch('https://crud-django-c7ri.onrender.com/api/user/', {
      method: 'POST',
      body: JSON.stringify(allData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    navigate('/Users');
  };

  return (
    <div>
      <div className="row text-end align-items-center">
        <div className="col-11 ps-4">
          <div className="bg_white">
            <div className="d-flex align-items-center">
              <div>
                <img className="pt-3 me-3" src={icon2} alt="" />
              </div>
              <div>
                <div className="bg_gray input mt-3">
                  <div className="d-flex">
                    <div>
                      <img className="ms-2 pe-2" src={icon3} alt="" />
                    </div>
                    <div className="pe-5">
                      <input
                        defaultValue="Search in the admin panel"
                        className="bg_gray border-0 pt-2 pb-2 fw_400 fs_12 ff_Outfit clr_black"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
        <div className="col-1">
          <img src={icon4} alt="" />
        </div>
      </div>
      <div className="table_box">
        <div className="">
          <div className="row pt-3">
            <div className="col-8">
              <h2 className="fw_500 fs_30 ff_Outfit clr_black">Add New User</h2>
            </div>
            <div className="col-4 text-end">
              <button
                className="fw_400 fs_16 ff_Outfit px-4 py-2 rounded-2 reset_btn"
                type="reset"
                onClick={() => {
                  setFirst_name('');
                  setLast_name('');
                  setEmail('');
                  setPhone_no('');
                  setCity('');
                  setState('');
                }}>
                Reset
              </button>
              <button
                className="fw_400 fs_16 ff_Outfit clr_black py-2 px-4 bg_yellwo border-0 rounded-2 ms-3 me-3"
                type="submit"
                form="userForm">
                <img className="me-2" src={btn} alt="" />
                Save
              </button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="py-3">
              <form id="userForm" onSubmit={handleData}>
                <div className="row mt-4">
                  <div className="col-3">
                    <label className="fw_400 fs_14 ff_Outfit clr_black" htmlFor="">
                      First Name
                    </label>
                    <input
                      value={first_name}
                      onChange={(e) => setFirst_name(e.target.value)}
                      className="w-100 fw_400 fs_16 ff_Outfit clr_black border-1 px-2 py-2"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-3 mt-3 mt-lg-0">
                    <label className="fw_400 fs_14 ff_Outfit clr_black" htmlFor="">
                      Last Name
                    </label>
                    <input
                      value={last_name}
                      onChange={(e) => setLast_name(e.target.value)}
                      className="w-100 fw_400 fs_16 ff_Outfit clr_black border-1 px-2 py-2"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-3">
                    <label className="fw_400 fs_14 ff_Outfit clr_black" htmlFor="">
                      E-Mail
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-100 fw_400 fs_16 ff_Outfit clr_black border-1 px-2 py-2"
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-3">
                    <label className="fw_400 fs_14 ff_Outfit clr_black" htmlFor="">
                      Phone Number
                    </label>
                    <input
                      value={phone_no}
                      onChange={(e) => setPhone_no(e.target.value)}
                      className="w-100 fw_400 fs_16 ff_Outfit clr_black border-1 px-2 py-2"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-3 mt-3">
                    <label className="fw_400 fs_14 ff_Outfit clr_black" htmlFor="">
                      State
                    </label>
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-100 fw_400 fs_16 ff_Outfit clr_black border-1 px-2 py-2"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div className="col-3 mt-3">
                    <label className="fw_400 fs_14 ff_Outfit clr_black" htmlFor="">
                      City
                    </label>
                    <input
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-100 fw_400 fs_16 ff_Outfit clr_black border-1 px-2 py-2"
                      type="text"
                      placeholder="State"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default From;
