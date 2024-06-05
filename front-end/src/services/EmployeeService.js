import axios from "axios";

const Rest_Api_Base_Url = 'http://localhost:8080/api/employees';

export const ListEmployees = () => axios.get(Rest_Api_Base_Url);

export const createEmployee = (employee) => axios.post(Rest_Api_Base_Url, employee);

export const getEmployee = (employeeId) => axios.get(Rest_Api_Base_Url + '/'+ employeeId); 

export const updateEmployee = (employeeId, employee) => axios.put(Rest_Api_Base_Url + '/' + employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(Rest_Api_Base_Url +'/'+ employeeId); 