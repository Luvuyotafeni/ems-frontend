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

  return (
    <div className='container'>
        
    </div>
  )
}

export default AdminComponent