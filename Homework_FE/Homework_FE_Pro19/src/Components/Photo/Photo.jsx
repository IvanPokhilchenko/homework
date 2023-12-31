import React from 'react'
import './Photo.css'

function Photo({imageUrl, name}) {
  return (
    <div className="photo">
    <img src={imageUrl} alt={name} />
    <h2>{name}</h2>
  </div>
  )
}

export default Photo