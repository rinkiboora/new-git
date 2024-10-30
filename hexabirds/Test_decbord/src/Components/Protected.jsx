import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({ File }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <File />
    </div>
  );
};

export default Protected;
