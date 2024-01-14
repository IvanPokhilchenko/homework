import React from 'react'
import './AboutMe.css'

function AboutMe({description}) {
  return (
    <div className="about-me">
    <p>{description}</p>
  </div>
  )
}

export default AboutMe