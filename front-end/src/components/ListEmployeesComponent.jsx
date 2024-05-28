import React, {useEffect, useState} from 'react'
import { ListEmployees } from '../services/EmployeeService'

const ListEmployeesComponent = () => {
    
    const [employees, setEmployees] =useState([])

    useEffect(() => {
        ListEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

  return (
    <div className='container'>
        <h2 className='text-center'>
            Company employees
        </h2>
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
                    dummydata.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.IdNo}</td>
                            <td>{employee.firstname}</td>                          
                            <td>{employee.Lastname}</td>
                            <td>{employee.email}</td>
                            <td>{employee.Gender}</td>
                            <td>{employee.Position}</td>
                            <td>{employee.Status}</td>
                            <td>{employee.Physical_Address}</td>
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