import React from 'react'
import './Education.css'

function Education({educationInfo}) {
  return (
    <div className="education">
    <h2>Education</h2>
    <p>{educationInfo}</p>
  </div>
  )
}

export default Education