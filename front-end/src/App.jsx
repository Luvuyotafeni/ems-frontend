import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import Footer from './components/Footer'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeesComponent from './components/ListEmployeesComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import LogIn from './components/LogIn'
import Menu from './components/Menu'
import LeaveForm from './components/LeaveForm'
import EmployeeMenu from './components/EmployeeMenu'
import ListAdminComponent from './components/ListAdminComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            <Route path='/' element={<Welcome/>}></Route>
            <Route path='/LogIn' element={<LogIn/>}></Route>
            <Route path='/menu' element={<Menu/>}></Route>
            <Route path='/employeeMenu' element={<EmployeeMenu/>}></Route>
            <Route path='/employees' element={<ListEmployeesComponent/>}></Route>
            <Route path='/add-Employee' element={<EmployeeComponent/>}></Route>
            <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
            <Route path='/LeaveForm' element={<LeaveForm/>}></Route>
            <Route path='/admins' element={<ListAdminComponent/>}></Route>
          </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
