import './App.css'
import Footer from './components/Footer'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeesComponent from './components/ListEmployeesComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            <Route path='/employees' element={<ListEmployeesComponent/>}></Route>
          </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
