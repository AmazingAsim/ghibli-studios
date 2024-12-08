import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav className='navbar bg-dark navbar-dark p-3'>
            <Link to="/" className='navbar-brand'>Marvel Studio Movies</Link>
        </nav>
    </div>
  )
}
