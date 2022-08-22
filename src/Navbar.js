import React from 'react'
import { Link,NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <nav className='background-black'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/fave">Fave</NavLink>
    <NavLink to="/about">About</NavLink>
    </nav>
    </>
  )
}
