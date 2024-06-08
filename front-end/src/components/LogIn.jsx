import React from 'react'

const LogIn = () => {
  return (
    <div className='container mt-2'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          <h2 className='text-center'>Log In</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'> Username </label>
                <input  className='form-control'></input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'> Password </label>
                <input  className='form-control'></input>
              </div>
              <div className='text-center'>
              <p><a href=''>Forgot password</a></p>
              <button className='btn btn-success '>Log In</button>            
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn