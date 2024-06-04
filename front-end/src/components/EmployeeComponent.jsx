import React, { useState } from 'react';
import { createEmployee, getEmployee } from '../services/EmployeeService';
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

  const {id} = useParams();

  const navigate = useNavigate();
  const handleIdNo = (e) => setIdNo(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleStatus = (e) => setStatus(e.target.value);
  const handlePosition = (e) => setPosition(e.target.value);
  const handlePhysicalAddress = (e) => setPhysicalAddress(e.target.value);

  useState(() =>{
    if (id){
      getEmployee(id).then((response)=>{
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
      })
    }
  }, [id])

  const saveEmployee = (e) => {
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

    console.log('Employee to be saved:', employee); // Debugging line

    createEmployee(employee).then((response) => {
      console.log(response.data);
      navigate('/employees');
    }).catch(error => {
      console.error('Error saving employee:', error);
    });
  }

  function pageTitle(){
    if (id) {
      return <h2 className='text-center'>Update Employee</h2>
    } else {
      return <h2 className='text-center'>Add Employee</h2>
    }
  }

  return (
    <div className='container'>
      <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name</label>
                <input type='text' placeholder='Enter First Name' value={firstName} className='form-control' onChange={handleFirstName} required/>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name</label>
                <input type='text' placeholder='Enter Last Name' value={lastName} className='form-control' onChange={handleLastName} required/>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input type='text' placeholder='Enter Email' value={email} className='form-control' onChange={handleEmail} required/>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Id No</label>
                <input type='text' placeholder='Enter Id No' value={idNo} className='form-control' onChange={handleIdNo} required/>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Gender</label>
                <input type='text' placeholder='Enter Gender' value={gender} className='form-control' onChange={handleGender} required/>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Position</label>
                <input type='text' placeholder='Enter Position' value={position} className='form-control' onChange={handlePosition} required/>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Status</label>
                <input type='text' placeholder='Enter Status' value={status} className='form-control' onChange={handleStatus} required/>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Physical Address</label>
                <input type='text' placeholder='Enter Physical Address' value={physicalAddress} className='form-control' onChange={handlePhysicalAddress} required/>
              </div>
              <button className='btn btn-success mb-2' onClick={saveEmployee}>Add Employee</button>
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
