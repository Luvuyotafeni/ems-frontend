import React, { useEffect, useState } from 'react';
import { ListEmployees, deleteEmployee } from '../services/EmployeeService'; // Ensure these are correctly imported
import { useNavigate } from 'react-router-dom';

const ListEmployeesComponent = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    ListEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(error => {
      console.error(error);
    });
  }

  function AddNewEmployee() {
    navigate('/add-Employee'); // Ensure this route is set up in your router
  }

  function updateEmployee(id){
    navigate(`/edit-employee/${id}`); // Ensure this route is set up in your router
  }

  function menu(){
    navigate('/menu')
  }
  function removeEmployee(id){
    deleteEmployee(id).then((response) => {
      console.log(id);
      getAllEmployees(); // Refresh the list after deletion
    }).catch(error => {
      console.error(error);
    });
  }

  return (
    <div className='container'>
      <p className='back-arrow'>
        <i class='bx bxs-left-arrow-square' onClick={menu}></i>
      </p>
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
            <th>Actions</th>
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
                <td>
                  <button onClick={() => updateEmployee(employee.id)}><i className='bx bxs-pencil'></i></button>
                  <button onClick={() => removeEmployee(employee.id)}><i className='bx bx-trash'></i></button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployeesComponent;
