import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import icon2 from '../assets/img/Icons (1).png';
import icon3 from '../assets/img/Icons (3).png';
import icon4 from '../assets/img/img icon.png';
import group from '../assets/img/Group .png';
import check_img from '../assets/img/check img.png';
import doted from '../assets/img/dotted.png';
import view from '../assets/img/view.png';
import edit from '../assets/img/edit.png';
import del from '../assets/img/delete.png';
import img_delete from '../assets/img/Vector delete.png';

const Users = ({ data, setData, setUpdateData }) => {
  const navigate = useNavigate();
  const [pops, setPops] = useState(null);
  const [deletee, setDelete] = useState(null);
  const [deletepop, setDeletePop] = useState(false);

  const popshow = (index) => {
    setPops(pops === index ? null : index);
  };

  const goToView = (user) => {
    navigate('/Viex', { state: { user } });
  };

  const goToEdit = (index) => {
    setUpdateData(index);
    navigate('/From');
  };

  const deleteDataHandler = (index) => {
    setDelete(index);
    setDeletePop(true);
  };

  const conformDeleteHandler = () => {
    const updateDatauser = [...data];
    updateDatauser.splice(deletee, 1);
    setData(updateDatauser);
    setDelete(null);
    setDeletePop(false);
  };

  const fetchData = async () => {
    try {
      const res = await fetch('https://crud-django-c7ri.onrender.com/api/user/');
      const result = await res.json();
      setData(result.data);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="overflow-hidden">
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
      <div className="bg_gray mt-2 pb-5">
        <div className="row pt-3">
          <div className="col-10">
            <h2 className="fw_500 fs_30 ff_Outfit clr_black ms-2">Users</h2>
          </div>
          <div className="col-2 text-end">
            <div className="d-flex">
              <button
                onClick={() => navigate('/From')}
                className="d-flex fw_400 fs_14 ff_Outfit py-3 px-2 bg_yellwo border-0 rounded-3 mb-3">
                <img className="me-2" src={group} alt="" /> Add New User
              </button>
            </div>
          </div>
        </div>
        <div className="table_box overflow-hidden overflow-y-scroll h_50">
          <table className="w-100">
            <thead>
              <tr>
                <th className="fw_400 fs_16 clr_black ff_Outfit pt-4">
                  <img className="me-2" src={check_img} alt="" />
                  Name
                </th>
                <th className="fw_400 fs_16 clr_black ff_Outfit pt-4">Registration</th>
                <th className="fw_400 fs_16 clr_black ff_Outfit pt-4">City / State</th>
                <th className="fw_400 fs_16 clr_black ff_Outfit pt-4">E-Mail</th>
                <th className="fw_400 fs_16 clr_black ff_Outfit pt-4">Phone Number</th>
                <th className="fw_400 fs_16 clr_black ff_Outfit pt-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="fw_400 fs_16 ff_Outfit clr_black pt-4">
                    <img className="me-2" src={check_img} alt="" />
                    {item.first_name}
                  </td>
                  <td className="fw_400 fs_16 ff_Outfit clr_black pt-4">01-01-2023</td>
                  <td className="fw_400 fs_16 ff_Outfit clr_black pt-4">Hisar / Haryana</td>
                  <td className="fw_400 fs_16 ff_Outfit clr_black pt-4">{item.email}</td>
                  <td className="fw_400 fs_16 ff_Outfit clr_black pt-4">{item.phone_no}</td>
                  <td className="position-relative">
                    <img onClick={() => popshow(index)} src={doted} alt="" />
                    {pops === index && (
                      <div className="box_delete position-absolute end-50 z-1">
                        <div onClick={() => goToView(item)} className="d-flex align-items-center">
                          <img className="me-2" src={view} alt="" />
                          <h3 className="fw_400 fs_14 ff_Outfit clr_black pt-2">View</h3>
                        </div>
                        <div onClick={() => goToEdit(index)} className="d-flex align-items-center">
                          <img className="me-2" src={edit} alt="" />
                          <h3 className="fw_400 fs_14 ff_Outfit clr_black pt-2">Edit</h3>
                        </div>
                        <div
                          className="d-flex align-items-center"
                          onClick={() => deleteDataHandler(index)}>
                          <img className="me-2" src={del} alt="" />
                          <h3 className="fw_400 fs_14 ff_Outfit clr_red pt-2">Delete</h3>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {deletepop && (
            <div className="box text-center pt-3">
              <img src={img_delete} alt="" />
              <h2 className=" fw_400 fs_20 ff_Outfit clr_red pt-3">Delete</h2>
              <h4 className="fw_400 fs_12 clr_black ff_Outfit pt-2 ">
                Are you sure you want to Delete?
              </h4>
              <button
                className=" fw_400 fs_14 ff_Outfit bg_green border-0 rounded-2 clr_white py-2 px-3 mt-2"
                onClick={() => setDeletePop(false)}>
                No, Cancel
              </button>
              <button
                className=" fw_400 fs_14 ff_Outfit bg_red border-0 rounded-2 clr_white py-2 px-3 ms-3 mt-2"
                onClick={conformDeleteHandler}>
                Yes, Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
