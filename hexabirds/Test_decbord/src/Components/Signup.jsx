import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(true);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password).then((user) => {
          console.log(user, 'users');
          localStorage.setItem('user', true);
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError(error.message);
    }
    setPassword('');
    setEmail('');
    navigate('/dash');
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setError('');
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-black h-50 w-50 m-auto mt-5">
      <form onSubmit={handleSubmit}>
        <h2 className=" clr_white">{isSignup ? 'Sign Up' : 'Login'}</h2>

        <div>
          <p className=" clr_white">Email</p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className=" clr_white">
          <p>Password</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button className=" mt-3" type="submit">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>

        <p
          className=" clr_white"
          onClick={toggleForm}
          style={{ cursor: 'pointer', marginTop: '10px' }}>
          {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </p>
      </form>
    </div>
  );
};

export default Login;
