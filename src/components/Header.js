import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <nav>
              <ul>
                <li><Link to="/" className='links'>Home</Link></li>
                <li><Link to="/login" className='links'>Login</Link></li>
                <li><Link to="/register"  className='links'>Register</Link></li>
                <li><Link to="/about"  className='links'>About</Link></li>
                <li><Link to="/posts"  className='links'>Posts</Link></li>
                
              </ul>
        </nav>
    </div>
  )
}

export default Header