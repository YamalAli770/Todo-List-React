import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
        <h2>Todo List</h2>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about' className='about'>About</Link>
        </nav>
    </div>
  )
}

export default Navbar