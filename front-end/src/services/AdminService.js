import axios from 'axios';

const Rest_Api_Base_Url = 'http://localhost:8080/api/admins';

export const ListAdmins = () => axios.get(Rest_Api_Base_Url);

export const createAdmin = (admin) => axios.post(Rest_Api_Base_Url, admin);

export const getAdmin = (AdminId) => axios.get(Rest_Api_Base_Url +"/"+ AdminId);

export const updateAdmin = (AdminId, Admin ) => axios.put(Rest_Api_Base_Url +"/"+ AdminId, Admin);

export const deleteAdmin = (AdminId) => axios.delete(Rest_Api_Base_Url +"/"+ AdminId);
