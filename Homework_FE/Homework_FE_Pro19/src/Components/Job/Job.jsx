import React from 'react'
import './Job.css'

function Job({jobInfo}) {
  return (
    <div className="job">
    <h2>Job</h2>
    <p>{jobInfo}</p>
  </div>
  )
}

export default Job