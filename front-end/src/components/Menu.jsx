import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();


  const handleSeeEmployeesClick = () => {
    navigate('/employees'); 
  };

  return (
    <div className='menu-container'>
      <div className='menu-item'>
        <p>Employees</p>
        <button className='btn btn-primary' onClick={handleSeeEmployeesClick}>See Employees</button>
      </div>
      <div className='menu-item'>
        <p>Admin</p>
        <button className='btn btn-primary'>See Admin</button>
      </div>
      <div className='menu-item'>
        <p>Leaves</p>
        <button className='btn btn-primary'>See Leaves</button>
      </div>
    </div>
  );
}

export default Menu;
