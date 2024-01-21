import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'


function Nav() {
  return (
    <div className='container'>
      <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "link")}>Home</NavLink>
      <NavLink to='/posts' className={({ isActive }) => (isActive ? "active" : "link")}>All Posts</NavLink>
    </div>
  )
}

export default Nav