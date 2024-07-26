import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getAdmin } from '../services/AdminService';

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

  return (
    <div className='container'>
        
    </div>
  )
}

export default AdminComponent