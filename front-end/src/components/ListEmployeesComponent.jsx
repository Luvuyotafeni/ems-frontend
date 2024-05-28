import React, {useEffect, useState} from 'react'
import { ListEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeesComponent = () => {
    
    const [employees, setEmployees] =useState([])

    const navigator = useNavigate();

    useEffect(() => {
        ListEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function AddNewEmployee(){
        navigator('/add-Employee')
    }

  return (
    <div className='container'>
        <h2 className='text-center'>
            Company employees
        </h2>
        <button className='btn btn-primary mb-2' onClick={AddNewEmployee}> Add employee </button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>IdNo</th>
                    <th>firstname</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>Gender</th>
                    <th>Position</th>
                    <th>Status</th>
                    <th>Physical_Address</th>
                </tr>
            </thead>

            <tbody>
                {
                    employees.map(employees => 
                        <tr key={employees.id}>
                            <td>{employees.id}</td>
                            <td>{employees.IdNo}</td>
                            <td>{employees.firstname}</td>                          
                            <td>{employees.Lastname}</td>
                            <td>{employees.email}</td>
                            <td>{employees.Gender}</td>
                            <td>{employees.Position}</td>
                            <td>{employees.Status}</td>
                            <td>{employees.Physical_Address}</td>
                        </tr>
                    )
                }
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeesComponent