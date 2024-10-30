import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { db } from './firebase';
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';

import nav_icon from '../img/Icons nav.png';
import vector_img from '../img/Vector 2.png';
import icon_ball from '../img/Icon ball.png';
import imgass from '../img/ico22.png';
import add_button from '../img/add_button.png';
import dotted from '../img/dotted.png';
import view from '../img/viwo.png';
import edit from '../img/edit.png';
import dele from '../img/delete.png';
import hiden from '../img/hiden.png';
import img_phn from '../img/img_phn.png';

const Catalog = () => {
  const [data, setData] = useState([]);
  const [pops, setPops] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [deletepop, setDeletePop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const value = [];
    const querySnapshot = await getDocs(collection(db, 'Product'));
    querySnapshot.forEach((doc) => {
      value.push({ id: doc.id, alldata: doc.data() });
    });
    setData(value);
  };

  const togglePopup = (index) => {
    setPops(pops === index ? null : index);
  };

  const goToView = (user) => {
    navigate('/View', { state: { user } });
  };

  const goToEdit = (index) => {
    navigate('/Form', { state: { index } });
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setDeletePop(true);
  };

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, 'Product', id));
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    setDeletePop(false);
  };

  const changeStatus = async (id, newStatus) => {
    const productDoc = doc(db, 'Product', id);
    await updateDoc(productDoc, { Status: newStatus });
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, alldata: { ...item.alldata, Status: newStatus } } : item
    );
    setData(updatedData);
  };
  

  return (
    <div className="overflow-hidden bg">
      <div className="row text-end align-items-center">
        <div className="col-11 ps-4">
          <div className="bg_white">
            <div className="d-flex align-items-center">
              <img className="pt-3 me-3" src={nav_icon} alt="Navigation Icon" />
              <div className="bg_gray input mt-3">
                <div className="d-flex">
                  <div>
                    <img className="ms-2 pe-2" src={vector_img} alt="Search Icon" />
                  </div>
                  <input
                    value="Search in the admin panel"
                    className="bg_gray border-0 pt-2 pb-2 fw_400 fs_12 ff_Outfit clr_black"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 pe-4">
          <img src={icon_ball} alt="Icon Ball" />
        </div>
      </div>

      <div className="d-flex justify-content-between pt-3">
        <h2 className="fw_500 fs_30 ff_Outfit clr_black mt-2 ps-3">Dashboard</h2>
        <div>
          <button className="bg_graye2 py-2 rounded-2 px-3 border-0 fw_400 fs_16 ff_Outfit me-2">
            <img className="me-2" src={imgass} alt="Filter Icon" />
            Filter
          </button>
          <button
            onClick={() => navigate('/Product')}
            className=" bg_yellwo  py-2 rounded-2 px-3 border-0 fw_400 fs_16 ff_Outfit me-2">
            <img className="me-2" src={add_button} alt="Add Button Icon" />
            Add New Product
          </button>
        </div>
      </div>

      <div className="row ps-3 pt-4 pb-4 rounded-2">
        <div className="ps-3 bg_white col-4">
          <h2 className="fw_700 fs_24 clr_orenge ff_Outfit pt-3">Total Products</h2>
          <h2 className="fw_400 fs_16 ff_Outfit clr_black">Total (34 items)</h2>
        </div>
        <div className="ps-3 bg_white col-4 ms-4 rounded-2">
          <h2 className="fw_700 fs_24 clr_red ff_Outfit pt-3">Low In Stock</h2>
          <h2 className="fw_400 fs_16 ff_Outfit clr_black">Total (8 items)</h2>
        </div>
      </div>

      <div className="table_box overflow-hidden overflow-y-scroll h_100vh w-100">
        <table className="w-100">
          <thead>
            <tr className="border_bottom">
              <th>
                <input type="checkbox" />
              </th>
              <th className="fw_400 fs_16 clr_black ff_Outfit pt-4">Product</th>
              <th className="fw_400 fs_16 clr_black ff_Outfit pt-4">Short Description</th>
              <th className="fw_400 fs_16 clr_black ff_Outfit pt-4">Category</th>
              <th className="fw_400 fs_16 clr_black ff_Outfit pt-4 ">Stock</th>
              <th className="fw_400 fs_16 clr_black ff_Outfit pt-4">Status</th>
              <th className="fw_400 fs_16 clr_black ff_Outfit pt-4">Price</th>
              <th className="fw_400 fs_16 clr_black ff_Outfit pt-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="mt-4 text-center position-relative">
                <td>
                  <input type="checkbox" />
                </td>
                <td className="fw_400 fs_16 ff_Outfit clr_black">
                  <img className="col-1" src={item.alldata.imageUrl} alt="Product" />{' '}
                  {item.alldata.Product}
                </td>
                <td className="fw_400 fs_14 ff_Outfit clr_black ">{item.alldata.Short}</td>
                <td className="fw_400 fs_16 ff_Outfit clr_black">{item.alldata.Category}</td>
                <button className="fw_400 fs_14 ff_Outfit clr_black bg_green border-0 mt-4 pt-2 pb-2 ps-1 pe-1  ">
                  {item.alldata.Stock}
                </button>
                <td className="fw_400 fs_16 ff_Outfit clr_black">{item.alldata.Status}</td>
                <td className="fw_400 fs_16 ff_Outfit clr_black">{item.alldata.Price}</td>
                <td className="position-relative">
                  <img
                    className=" ms-4"
                    onClick={() => togglePopup(index)}
                    src={dotted}
                    alt="Options"
                  />
                  {pops === index && (
                    <div className="box_delete end-50 z-1">
                      <div className="d-flex align-items-center">
                        <Link to={`/details/:id${item.id}`}>
                          <img className="me-2" src={view} alt="View Icon" />
                        </Link>
                        <h3 className="fw_400 fs_14 ff_Outfit clr_black pt-2">View</h3>
                      </div>
                      <Link to="/Product">
                        <div onClick={() => goToEdit(index)} className="d-flex align-items-center">
                          <img className="me-2" src={edit} alt="Edit Icon" />
                          <h3 className="fw_400 fs_14 ff_Outfit clr_black pt-2">Edit</h3>
                        </div>
                      </Link>
                      <div
                        onClick={() =>
                          changeStatus(
                            item.id,
                            item.alldata.Status === 'Hidden' ? 'Public' : 'Hidden'
                          )
                        }
                        className="d-flex align-items-center">
                        <img className="me-2" src={hiden} alt="Hidden Icon" />
                        <h3 className="fw_400 fs_14 ff_Outfit clr_green pt-2">
                          {item.alldata.Status === 'Hidden'
                            ? 'Change to Public'
                            : 'Change to Hidden'}
                        </h3>
                      </div>
                      <div
                        className="d-flex align-items-center"
                        onClick={() => handleDeleteClick(index)}>
                        <img className="me-2" src={dele} alt="Delete Icon" />
                        <h3 className="fw_400 fs_14 ff_Outfit clr_red pt-2">Delete</h3>
                      </div>
                      {deletepop && deleteIndex === index && (
                        <div className="box_edit text-center pt-3 position-absolute delete_button">
                          <h4 className="fw_400 fs_12 clr_black ff_Outfit pt-2">
                            Are you sure you want to delete this product?
                          </h4>
                          <button
                            className="fw_400 fs_14 ff_Outfit bg_yellwo border-0 rounded-2 clr_white py-2 px-3 ms-3 mt-2"
                            onClick={() => deleteProduct(item.id)}>
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Catalog;
