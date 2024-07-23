import React from 'react'

const EmployeeMenu = () => {
  return (
    <div className='menu-container'>
      <div className='menu-item'>
        <p>Leaves</p>
        <button className='btn btn-primary'>Request Leave</button>
      </div>
      <div className='menu-item'>
        <p>Pay Slip</p>
        <button className='btn btn-primary'>View Payslip</button>
      </div>
    </div>
  )
}

export default EmployeeMenu