import React from 'react'

const ListEmployeesComponent = () => {
    const dummydata = [
        {
        "id": 1,
        "IdNo": "0011205737080",
        "firstname": "Luvuyo",
        "Lastname": "Tafeni",
        "email": "luvuyotafeni012@gmail.com",
        "Gender": "Male",
        "Position": "Developer",
        "Status": "On-Site",
        "Physical_Address": "19 Tosti street, Delft, Capetown, 7102"
        },
        {
            "id": 2,
            "IdNo": "0011205737080",
            "firstname": "Luvuyo",
            "Lastname": "Tafeni",
            "email": "luvuyotafeni012@gmail.com",
            "Gender": "Male",
            "Position": "Developer",
            "Status": "On-Site",
            "Physical_Address": "19 Tosti street, Delft, Capetown, 7102"
            }
    ]
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