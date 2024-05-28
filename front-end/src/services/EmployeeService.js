import axios from "axios";

const Rest_Api_Base_Url = 'http://localhost:3306/api/employees';

export const ListEmployees = () => axios.get(Rest_Api_Base_Url);