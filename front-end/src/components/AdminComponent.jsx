import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createAdmin, getAdmin, updateAdmin } from '../services/AdminService';

const AdminComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEMail] = useState('');
    const [Password, setPassword] = useState('');

    const {id} = useParams();

    const naviagte = useNavigate();

    useEffect(() => {
        if (id){
            getAdmin(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.LasttName);
                setEMail(response.data.Email);
                setPassword(response.data.Password);
            }).catch(error => {
                console.error(error);
            });
        }
    },[id]);

    const saveOrUpdateAdmin = (e) => {
    
        const admin ={
            firstName,
            LastName,
            Email,
            Password
        };

        if (id) {
            updateAdmin(id, admin).then((response) => {
                console.log(response.data);
                naviagte('/admins');
            }).catch(error => {
                console.error(error);
            });
        } else {
            createAdmin(admin).then((response) => {
                console.log(response.data);
                naviagte('/admins');
            }).catch(error => {
                console.error(error);
            });
        }
    };

    const pageTitle = () =>{
        if (id) {
            return <h2 className='text-center'>Update Admin</h2>;
          } else {
            return <h2 className='text-center'>Add Admin</h2>;
          }
    };

  return (
    <div className='container'>
        <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                {pageTitle}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label mt-2'>First Name</label>
                            <input type='text' placeholder='Enter First Name' value={firstName} className='form-control' onChange={(e) => setFirstName(e.target.value)} required />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label mt-2'>Surname </label>
                            <input type='text' placeholder='Enter First Name' value={LastName} className='form-control' onChange={(e) => setFirstName(e.target.value)} required />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label mt-2'>Email</label>
                            <input type='text' placeholder='Enter First Name' value={Email} className='form-control' onChange={(e) => setFirstName(e.target.value)} required />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label mt-2'>Password </label>
                            <input type='text' placeholder='Enter First Name' value={Password} className='form-control' onChange={(e) => setFirstName(e.target.value)} required />
                        </div>
                        <div className='text-center mt-2'>
                            <button className='btn btn-success mb-2 mt-2 ' onClick={saveOrUpdateAdmin}>{id ? 'Update Employee' : 'Add Employee'}</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    </div>
  )
}

export default AdminComponent