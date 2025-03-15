import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav className='navbar bg-dark navbar-dark p-3'>
            <Link to="/" className='navbar-brand'>Ghibli Studio Guide</Link>
        </nav>
    </div>
  )
}
