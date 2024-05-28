import React, {useState} from 'react'

const EmployeeComponent = () => {

    const [firstName, setFirstname] = useState('')
    const [LastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [Gender, setGender] = useState('')
    const [position, setPosition] = useState('')
    const [IdNo, setIdNo] = useState('')
    const [Status, setStatus] = useState('')
    const [Physical_Adress, setPhyiscal_Address] = useState('')


    function handleFirstname(e){
      setFirstname(e.target.value);
    }
    function handleLastName(e){
      setLastName(e.target.value);
    }
    function handleEmail(e){
      setEmail(e.target.value);
    }
    function handleIdNo(e){
      setIdNo(e.target.value);
    }
    function handleGender(e){
      setGender(e.target.value);
    }
    function handlePosition(e){
      setPosition(e.target.value);
    }
    function handleStatus(e){
      setFirstname(e.target.value);
    }
    function handlePhysical_address(e){
      setPhyiscal_Address(e.target.value);
    }


  return (
    <div className='container'>
      <br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add employee</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name</label>
                <input type='text' placeholder='Enter First name' name='firstname' value={firstName} className='form-control' onChange={handleFirstname}></input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name</label>
                <input type='text' placeholder='Enter Last Name' name='Last Name' value={firstName} className='form-control' onChange={handleLastName}></input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input type='text' placeholder='Enter Email' name='email' value={email} className='form-control' onChange={handleEmail}></input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Id No</label>
                <input type='text' placeholder='Enter Id No' name='IdNo' value={IdNo} className='form-control' onChange={handleIdNo}></input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Gender </label>
                <input type='text' placeholder='Enter Gender' name='Gender' value={Gender} className='form-control' onChange={handleGender}></input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label mb-2'>Position</label>
                <input type='text' placeholder='Enter Position' name='Position' value={position} className='form-control' onChange={handlePosition}></input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Status</label>
                <input type='text' placeholder='Enter Status' name='Status' value={Status} className='form-control' onChange={handleStatus}></input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Physical Address</label>
                <input type='text' placeholder='Enter Physical Address' name='Physical_Address' value={Physical_Adress} className='form-control' onChange={handlePhysical_address}></input>
              </div>
              <button className='btn btn-success mb-2'>Add employee</button>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  )
}

export default EmployeeComponent