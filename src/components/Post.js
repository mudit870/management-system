import React from 'react'
import "./Post.css"

function Post({type, description, address, amount, number}) {
  return (
    <div className='post'>
        <div className='post_info'>
            <h2>Job Type: {type}</h2>
            <p>Job Description: {description}</p>
            <h4>Address: {address}</h4>
            <h4>Salary: {amount}</h4>
        </div>
        <div className='post_btn'>
            <button className='post_btn_accept'>Accept</button>
            <p>Filled <br/>3/{number}</p>
            <button className='post_btn_reject'>Decline</button>
        </div>
    </div>
  )
}

export default Post