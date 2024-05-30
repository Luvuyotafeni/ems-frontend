import React, { useEffect, useState } from 'react';
import { ListEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeesComponent = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    ListEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  function AddNewEmployee() {
    navigate('/add-Employee');
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Company Employees</h2>
      <button className='btn btn-primary mb-2' onClick={AddNewEmployee}>Add Employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>IdNo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Position</th>
            <th>Status</th>
            <th>Physical Address</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee =>
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.idNo}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.gender}</td>
                <td>{employee.position}</td>
                <td>{employee.status}</td>
                <td>{employee.physicalAddress}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployeesComponent;
