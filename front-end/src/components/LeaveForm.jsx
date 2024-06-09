import React from 'react'

const LeaveForm = () => {
  return (
    <div className='container mt-2'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          <div className='text-center'>Leave Form</div>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>
                 First Name
                </label>
                <input className='form-control'>
                </input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>
                  Last Name
                </label>
                <input className='form-control'>
                </input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>
                  Email
                </label>
                <input className='form-control'>
                </input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label '>
                  Leave Start Date
                </label>
                <input className='form-control' type='date'>
                </input>
              </div>
              <div className='form-control mb-2'>
                <label className='form-label'>
                  Leave End date
                </label>
                <input className='form-control' type='date'>
                </input>
              </div>
              <div className='text-center'>
              <button className='btn btn-success '>Apply</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaveForm