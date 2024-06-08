import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/VPlogo.png';

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/LogIn');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='welcome_pg'>
      <p>Welcome to the VP employee management system</p>
      <img src={logo} alt="VP Logo" />
      <p>Please wait...</p>
    </div>
  );
}

export default Welcome;
