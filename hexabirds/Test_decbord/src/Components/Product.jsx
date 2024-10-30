import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from './firebase';
import { toast } from 'react-toastify'; // Add this import
import nav_icon from '../img/Icons nav.png';
import vector_img from '../img/Vector 2.png';
import icon_ball from '../img/Icon ball.png';
import btn from '../img/save_img.png';
import img_delete from '../img/delete.png';
import plas_img from '../img/plas.png';
import Search from './search';
import Service from './Service';
import Stock from './Stock';

import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useEffect } from 'react';

const Product = () => {
  // const [inp, setInp] = useState(true);
  const [fist, setFist] = useState('live');
  const [fist2, setFist2] = useState('live');
  const [fist3, setFist3] = useState('live');
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState({
    Product: '',
    Short: '',
    Description: '',
    pin: '',
    Category: '',
    Status: '',
    Price: '',
    Amount: '',
  });
  // const { id } = useParams();
  // async function dataall() {
  //   const docRef = doc(db, 'Product', id);
  //   const docSnap = await getDoc(docRef);
  //   setData(docSnap.data());
  //   console.log(docSnap, 'docsnap');
  // }
  // useEffect(() => {
  //   dataall();
  // }, []);

  // const navgite = useNavigate();
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleImageUpload = async () => {};
  const handleData = async (e) => {
    // e.preventDefault();

    // if (data.Product !== '' && data.Short !== '' && data.Description !== '') {
    try {
      const storageRef = ref(storage, `projectImages/${image.name}`);
      await uploadBytes(storageRef, image).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });

      let url = await getDownloadURL(storageRef);
      const docRef = await addDoc(collection(db, 'Product'), { ...data, imageUrl: url });
      
      
      toast.success('Success!');
      // setTimeout(() => {
      //   navigate('/Catalog');
      // }, 3000);
    } catch (err) {
      console.log(err);
    }
    // }
    // navigate('/Catalog');
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className=" overflow-hidden  bg">
      <div className="overflow-hidden bg">
        <div className="row text-end align-items-center">
          <div className="col-11 ps-4">
            <div className="bg_white">
              <div className="d-flex align-items-center">
                <div>
                  <img className="pt-3 me-3" src={nav_icon} alt="Navigation Icon" />
                </div>
                <div>
                  <div className="bg_gray input mt-3">
                    <div className="d-flex">
                      <div>
                        <img className="ms-2 pe-2" src={vector_img} alt="Search Icon" />
                      </div>
                      <div className="pe-5">
                        <input
                          placeholder="Search in the admin panel"
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
          <div className="col-1 pe-4">
            <img src={icon_ball} alt="Ball Icon" />
          </div>
        </div>
        <div className="d-flex justify-content-between pt-3">
          <div>
            <h2 className="fw_500 fs_30 ff_Outfit clr_black mt-2 ps-3">New Product</h2>
          </div>
          <div>
            <button className="button_reset me-2 fs_16 fw_400 ff_Outfit">Reset</button>
            {/* <button
              type="submit"
              onClick={handleData}
              onClick={() => navigate('/Catalog')}
              className="bg_yellwo clr_black py-2 px-3 rounded-2 fs_16 fw_400 ff_Outfit border-0 me-2">
              <img className="me-2" src={btn} alt="Save Button" />
              Save
            </button> */}

            <button
              type="submit"
              onClick={() => {
                handleData();
              }}
              className="bg_yellwo clr_black py-2 px-3 rounded-2 fs_16 fw_400 ff_Outfit border-0 me-2">
              <img className="me-2" src={btn} alt="Save Button" />
              Save
            </button>
          </div>
        </div>
      </div>
      <div className=" row">
        <div className=" col-9 b">
          <div className=" ms-3 form_box ps-2 pt-2 pb-3 bg_white pb-4 ">
            <h2 className=" fw_400 fs_18 clr_black ff_Outfit ">Basic Information</h2>
            <form onSubmit={handleData}>
              <h2 className="fw_400 fs_14 ff_Outfit clr_black pb-2">Name</h2>
              <div className="pe-5">
                <input
                  value={data.Product}
                  onChange={handleChange}
                  name="Product"
                  placeholder="Enter product name"
                  className="w-100 text-start fw_400 fs_16 ff_Outfit clr_grye1 pt-2 pb-2 ps-2"
                  type="text"
                />
              </div>
              <h2 className="fw_400 fs_14 ff_Outfit clr_black pt-2 pt-3">Short Description</h2>
              <div className="pe-5">
                <input
                  value={data.Short}
                  onChange={handleChange}
                  name="Short"
                  placeholder="Enter short description"
                  className="w-100 text-start fw_400 fs_16 ff_Outfit clr_grye1 pt-2 pb-2 ps-2"
                  type="text"
                />
              </div>
              <h2 className="fw_400 fs_14 ff_Outfit clr_black pt-3">Description</h2>
              <div className="pe-5">
                <textarea
                  value={data.Description}
                  onChange={handleChange}
                  name="Description"
                  className="ps-2"
                  rows="4"
                  cols="90"
                  placeholder="Enter more details"></textarea>
              </div>
            </form>
          </div>
          <form className=" bg_white pt-3 mt-4 pb-4 ps-3" action="">
            <h2 className=" fs_18 fw_400 clr_black ff_Outfit mt-3">Availability</h2>
            <h3 className=" fw_400 fs_12 clr_black ff_Outfit">
              Choose the areas where the product will be shown
            </h3>
            <h2 className=" fw_400 fs_18 clr_green ff_Outfit text-end me_21">+ Add More</h2>
            <div className=" d-flex align-items-center">
              <div>
                <h2 className=" fw_400 fs_14 ff_Outfit clr_black pb-2">Enter Pin Code</h2>
                <div className=" pe-5 ">
                  <input
                    value={data.value}
                    name="pin"
                    id="pin"
                    onChange={handleChange}
                    placeholder="125001"
                    className="  w-100 text-start fw_400 fs_16 ff_Outfit clr_grye1 pt-2 pb-2 ps-2  "
                    type="text"
                  />
                </div>
              </div>
              <div className=" col-4">
                <h2 className=" fw_400 fs_14 ff_Outfit clr_black pt-2">Select Area</h2>
                <div className=" pe-5 ">
                  <select className=" pt-2 col-12 pb-2" id="cars" name="cars">
                    <option value="volvo">Dabra Chowk</option>

                    <option value="saab">Saab 95</option>
                    <option value="mercedes">Mercedes SLK</option>
                    <option value="audi">Audi TT</option>
                  </select>
                </div>
              </div>
              <div className=" bg_red mt-4 py-1 px-2">
                <img className=" " src={img_delete} alt="" />
              </div>
            </div>
          </form>

          <form className=" bg_white ps-3 pb-4 " action="">
            <div className=" d-flex mt-3">
              <h2 className=" fs_18 fw_400 clr_black ff_Outfit mt-3">Have More Varients ?</h2>
              <div className=" d-flex align-items-center ms-5 ps-4">
                <h2 className=" fw_400 fs_14 clr_black ff_Outfit mt-2 me-4">yes</h2>
                <input
                  onChange={() => setFist2('off')}
                  checked={fist2 === 'off'}
                  className=" chacbox"
                  type="radio"
                  name=""
                  id=""
                />
              </div>
              <div className=" d-flex align-items-center ms-5">
                <h2 className=" fw_400 fs_14 clr_black ff_Outfit mt-2 ms-4 me-3">no</h2>
                <input
                  onChange={() => setFist2('on')}
                  checked={fist2 === 'on'}
                  className=" chacbox"
                  type="radio"
                  name=""
                  id=""
                />
              </div>
            </div>

            <h2 className=" fw_400 fs_18 clr_black pt-2 pb-3 ff_Outfit me_21">Pricing</h2>
            <div className=" d-flex align-items-center">
              <div>
                <h2 className=" fw_400 fs_14 ff_Outfit clr_black pb-2">Original Price</h2>
                <div className=" pe-5 ">
                  <input
                    placeholder="₹ 0.00"
                    className="  w-100 text-start fw_400 fs_16 ff_Outfit clr_grye1 pt-2 pb-2 ps-2  "
                    type="text"
                  />
                </div>
              </div>
              <div className=" col-4">
                <h2 className=" fw_400 fs_14 ff_Outfit clr_black pt-2">Discount Type</h2>
                <div className=" pe-5 ">
                  <select className=" pt-2 col-12 pb-2" id="cars" name="cars">
                    <option value="volvo">Amount</option>
                    <option value="saab">Saab 95</option>
                    <option value="mercedes">Mercedes SLK</option>
                    <option value="audi">Audi TT</option>
                  </select>
                </div>
              </div>
              <div>
                <h2 className=" fw_400 fs_14 ff_Outfit clr_black pt-2">Discount</h2>
                <div className=" pe-5 ">
                  <input
                    placeholder="₹ 0.00"
                    className="  w-100 text-start fw_400 fs_16 ff_Outfit clr_grye1 pt-2 pb-2 ps-2  "
                    type="text"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className=" row position-relative bg_white ps-3 pb-5  mt-4">
            <h2 className=" fw_400 fs_18 ff_Outfit clr_black pt-4 pb-3">Images</h2>
            <div>
              <input
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="fileInput"
              />
              {!image && (
                <label htmlFor="fileInput">
                  <button onClick={() => document.getElementById('fileInput').click()}>
                    Select Image
                  </button>
                </label>
              )}
              {/* <button onClick={handleImageUpload} disabled={uploading || !selectedImage}>
                {uploading ? 'Uploading...' : 'Upload Image'}
              </button> */}
              {image && (
                <div>
                  <img src={URL.createObjectURL(image)} style={{ maxWidth: 150 }} alt="Uploaded" />
                  <button onClick={() => setImage(null)}>Delete</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=" col-3 mt-3   ">
          <div className=" form_box pb-3 bg_white  ">
            <div className=" ps-3">
              <h2 className=" fw_400 fs_18 clr_black ff_Outfit ">Status</h2>
              <div className=" d-flex align-items-center">
                <input
                  onChange={() => setFist3('on')}
                  checked={fist3 === 'on'}
                  className=" me-3 chacbox"
                  type="checkbox"
                  name=""
                  id=""
                />
                <h2 className=" fw_400 fs_16 ff_Outfit clr_black mt-1">Published</h2>
              </div>
              <div className=" d-flex align-items-center">
                <input
                  onChange={() => setFist3('off')}
                  checked={fist3 === 'off'}
                  className=" me-3 chacbox"
                  type="checkbox"
                  name=""
                  id=""
                />

                <h2 className=" fw_400 fs_16 ff_Outfit clr_black mt-1">Hidden</h2>
              </div>
              <h2 className=" fw_400 fs_18 clr_black ff_Outfit pt-4 ">Free Delivery</h2>
              <div className=" d-flex  pt-2">
                <div className=" d-flex align-items-center ">
                  <input
                    onChange={() => setFist('on')}
                    checked={fist === 'on'}
                    className=" me-3 chacbox"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <h2 className=" fw_400 fs_16 ff_Outfit clr_black mt-1 me-3">Yes</h2>
                </div>
                <div className=" d-flex align-items-center">
                  <input
                    onChange={() => setFist('off')}
                    checked={fist === 'off'}
                    className=" me-3 chacbox"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <h2 className=" fw_400 fs_16 ff_Outfit clr_black mt-1">No</h2>
                </div>
              </div>
            </div>

            <form className=" ps-3 bg_white" action="">
              <h2 className=" fw_400 fs_14 ff_Outfit clr_black pb-2 pt-4">Delivery Charge</h2>
              <div className=" pe-5 ">
                <input
                  value={data.Price}
                  name="Price"
                  id="Price"
                  onChange={handleChange}
                  placeholder="₹ 0.00"
                  className="  w-50 text-start fw_400 fs_16 ff_Outfit clr_grye1 pt-2 pb-2 ps-2 w-100  "
                  type="text"
                />
              </div>
              <h2 className=" fw_400 fs_14 ff_Outfit clr_black pt-2">Service charge</h2>
              <div className=" pe-5 ">
                <input
                  value={data.Amount}
                  name="Amount "
                  id="Amount "
                  onChange={handleChange}
                  placeholder="Amount "
                  className="  w-50 text-start fw_400 fs_16 ff_Outfit clr_grye1 pt-2 pb-2 ps-2 w-100 "
                  type="text"
                />
              </div>
              <h2 className=" fw_400 fs_14 ff_Outfit clr_black pt-3 ">Sales man Commission</h2>

              <div className=" pe-5 ">
                <input
                  placeholder="₹ 0.00"
                  className="  w-50 text-start fw_400 fs_16 ff_Outfit clr_grye1 pt-2 w-100 ps-2 "
                  type="text"
                />
              </div>
            </form>
          </div>
          <div className="form_box mt-1 ps-3 bg_white pb-3 mt-3 ">
            <form action="">
              <h2 className=" fw_400 fs_14 ff_Outfit clr_black pb-2 pt-4">SKU</h2>
              <div className=" pe-5 ">
                <input
                  value={data.SKU}
                  name="SKU"
                  id="SKU"
                  onChange={handleChange}
                  placeholder="6HK3I5"
                  className="  w-50 text-start fw_400 fs_16 ff_Outfit clr_grye1 pt-2 pb-2 ps-2 w-100  "
                  type="text"
                />
              </div>
              <h2 className=" fw_400 fs_14 ff_Outfit clr_black pt-2">
                Total Stock <span>( Purchase Value : ₹ 8000.00 )</span>
              </h2>

              <div className=" pe-5 mt-3 ">
                <div className=" input_border  d-flex align-items-center pe-2 ">
                  <input
                    value={data.Stock}
                    name="Stock"
                    id="Stock"
                    onChange={handleChange}
                    placeholder="50 "
                    className="  w-50 text-start fw_400 fs_16 ff_Outfit clr_grye1 pt-2 pb-2 ps-2 w-100  border-0 "
                    type="text"
                  />
                  <div>
                    <img src={plas_img} alt="" />
                  </div>
                </div>
              </div>
              <h2 className=" fw_400 fs_14 ff_Outfit clr_black pt-3 ">Stock Alert Count</h2>

              <div className=" pe-5 ">
                <Stock />
              </div>
            </form>
          </div>
          <div className=" ms-3">
            <h2 className=" fw_400 fs_18 clr_black ff_Outfit mt-3">Categories</h2>

            <div className=" pe-5 ">
              <select
                value={data.Category}
                name="Category"
                id="Category"
                onChange={handleChange}
                className=" pt-2 col-12 pb-2">
                <option value="Ele">search for category</option>
                <option value="Electronics">Electronics</option>
                <option value="Footwear">Footwear</option>
                <option value="Suppliments">Animal Suppliments</option>
                <option value="Grocery">Grocery</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
