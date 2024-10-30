import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = ({ setData, data, updateData, setupdateData }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [cls, setCls] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (updateData !== null) {
      const item = data[updateData];
      setName(item.name);
      setAge(item.age);
      setCls(item.class);
    } else {
      setName('');
      setAge('');
      setCls('');
    }
  }, [updateData, data]);

  const handleData = (e) => {
    e.preventDefault();
    const studentData = {
      name: name,
      class: cls,
      age: age,
    };

    if (updateData !== null) {
      const newData = [...data];
      newData[updateData] = studentData;
      setData(newData);
      setupdateData(null);
    } else {
      setData([...data, studentData]);
      setAge('');
      setCls("")
      setName("")
    }

    navigate('/path');
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={handleData}>
          <p>Name</p>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
          <p>Class</p>
          <input value={cls} onChange={(e) => setCls(e.target.value)} type="text" />
          <p>Age</p>
          <input value={age} onChange={(e) => setAge(e.target.value)} type="text" />
          <br />
          <button className=' mt-4' type="submit">{updateData !== null ? 'update' : 'submit'}</button>
        </form>
      </div>
    </div>
  );
};

export default About;
