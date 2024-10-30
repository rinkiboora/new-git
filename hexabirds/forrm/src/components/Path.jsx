import React from 'react';
import { useNavigate } from 'react-router-dom';

const Path = ({ data, setData, setupdateData }) => {
  const navigate = useNavigate();

  const deleteDataHandler = (index) => {
    let newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const updateDataHandler = (index) => {
    setupdateData(index);
    navigate('/');
  };

  return (
    <div className=" container-fluid">
      <button
        onClick={() => {
          navigate('/');
          setupdateData(null);
        }}>
        Add Data
      </button>

      <div className="row row-gap-4">
        {data.map((item, index) => (
          <div key={index} className=" col-3">
            <div className=" from2">
              <p>Name: {item.name}</p>
              <p>Class: {item.class}</p>
              <p>Age: {item.age}</p>
              <button onClick={() => deleteDataHandler(index)}>Delete</button>
              <button onClick={() => updateDataHandler(index)}>Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Path;
