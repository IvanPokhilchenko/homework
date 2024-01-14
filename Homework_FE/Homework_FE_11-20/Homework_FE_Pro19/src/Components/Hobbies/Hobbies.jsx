import React from 'react'
import './Hobbies.css'

function Hobbies({hobbiesList}) {
  return (
    <div className="hobbies">
    <h2>Hobbies</h2>
    <ul>
      {hobbiesList.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  </div>
  )
}

export default Hobbies