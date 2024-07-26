import React, { useEffect, useState } from 'react'
import { ListAdmins , deleteAdmin} from '../services/AdminService'
import { useNavigate } from 'react-router-dom'

const ListAdminComponent = () => {

    const [admins, setAdmins] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAllAdmins();
    }, []);

    function getAllAdmins(){
        ListAdmins().then((response) => {
           setAdmins(response.data);
        }).catch(error =>{
           console.error(error);
        });
    }
    
    function menu(){
        navigate('/menu');
    }
    
    function updateAdmin(id){
        navigate(`/edit-admin/${id}`);
    }

    function removeAdmin(id){
        deleteAdmin(id).then((response) =>{
           console.log(id);
           getAllAdmins();
        }).catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <p className='backarrow'>
                <i class='bx bxs-left-arrow-square' onClick={menu}></i>
            </p>
            <h2 className='text-center'>Admins</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Admin Name</th>
                        <th>Admin Surname</th>
                        <th>Admin Email</th>
                        <th>Admin Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        admins.map(admins => 
                            <tr  key={adminId}>
                                <td>{admins.id}</td>
                                <td>{admins.Name}</td>
                                <td>{admins.LastName}</td>
                                <td>{admins.Email}</td>
                                <td>{admins.Passowrd}</td>
                                <td>
                                    <button onClick={ () => updateAdmin(admins.id)}><i className='bx bxs-pencil'></i></button>
                                    <button onClick={() => removeAdmin(admins.id)}><i className='bx bx-trash'></i></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>


        </div>
    )
}

export default ListAdminComponent