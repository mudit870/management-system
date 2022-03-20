import React from 'react'
import './Form.css'

function Form() {
  return (
    <div className='form'>
      <div className='form_job_info'>
        <label>Job Type: <input type="text" placeholder='e.g. Painter' required></input></label>
      </div>
      <div className='form_job_description'>
        <label>Job Description: <input type="text" placeholder='e.g. Paint 2 rooms' required></input></label>
      </div>
      <div className='form_job_address'>
        <label>Address: <input type="text" placeholder='e.g. A-98, Rohini' required></input></label>
      </div>
      <div className='form_job_salary'>
        <label>Salary: <input type="text" placeholder='e.g. ₹ 800' required></input></label>
      </div>
      <div className='form_job_number'>
        <label>Number of Person Required: <input type="number" placeholder='e.g. Painter' required></input></label>
      </div>
      <div className='form_submit_btn'><button>Post</button></div>
    </div>
  )
}

export default Form