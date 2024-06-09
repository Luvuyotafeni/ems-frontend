import React, { useState, useEffect } from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [position, setPosition] = useState('');
  const [idNo, setIdNo] = useState('');
  const [status, setStatus] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id).then((response) => {
        setIdNo(response.data.idNo);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setGender(response.data.gender);
        setStatus(response.data.status);
        setPosition(response.data.position);
        setPhysicalAddress(response.data.physicalAddress);
      }).catch(error => {
        console.error(error);
      });
    }
  }, [id]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = {
      idNo,
      firstName,
      lastName,
      email,
      gender,
      status,
      position,
      physicalAddress
    };

    if (id) {
      updateEmployee(id, employee).then((response) => {
        console.log(response.data);
        navigate('/employees');
      }).catch(error => {
        console.error(error);
      });
    } else {
      createEmployee(employee).then((response) => {
        console.log(response.data);
        navigate('/employees');
      }).catch(error => {
        console.error(error);
      });
    }
  };

  const pageTitle = () => {
    if (id) {
      return <h2 className='text-center'>Update Employee</h2>;
    } else {
      return <h2 className='text-center'>Add Employee</h2>;
    }
  };

  return (
    <div className='container'>
      <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label mt-2'>First Name</label>
                <input type='text' placeholder='Enter First Name' value={firstName} className='form-control' onChange={(e) => setFirstName(e.target.value)} required />
              </div>
              <div className='form-group mb-2'>
                <label className='form-label mt-2'>Last Name</label>
                <input type='text' placeholder='Enter Last Name' value={lastName} className='form-control' onChange={(e) => setLastName(e.target.value)} required />
              </div>
              <div className='form-group mb-2'>
                <label className='form-label mt-2'>Email</label>
                <input type='email' placeholder='Enter Email' value={email} className='form-control' onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Id No</label>
                <input type='text' placeholder='Enter Id No' value={idNo} className='form-control' onChange={(e) => setIdNo(e.target.value)} required />
              </div>
              <div className='form-group mb-2'>
                <label className='form-label mt-2'>Gender</label>
                <select value={gender} className='form-control' onChange={(e) => setGender(e.target.value)} required>
                  <option value=''>Select Gender</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label mt-2'>Position</label>
                <input type='text' placeholder='Enter Position' value={position} className='form-control' onChange={(e) => setPosition(e.target.value)} required />
              </div>
              <div className='form-group mb-2 '>
                <label className='form-label mt-2'>Status</label>
                <input type='text' placeholder='Enter Status' value={status} className='form-control' onChange={(e) => setStatus(e.target.value)} required />
              </div>
              <div className='form-group mb-2 '>
                <label className='form-label mt-2'>Physical Address</label>
                <input type='text' placeholder='Enter Physical Address' value={physicalAddress} className='form-control' onChange={(e) => setPhysicalAddress(e.target.value)} required />
              </div>
              <div className='text-center mt-2'>
              <button className='btn btn-success mb-2 mt-2 ' onClick={saveOrUpdateEmployee}>{id ? 'Update Employee' : 'Add Employee'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default EmployeeComponent;
