import React from 'react'

const card = (props) => {
  return (
  <div className="card">
    <img src = "https://plus.unsplash.com/premium_photo-1786012039111-0d9e56cd53c3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
    <h1>{props.user}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <button>View Profile</button>
  </div>
  )
}

export default card