import React from 'react'
import { Link } from 'react-router-dom';

const Clickables = () => {
  return (
    <div>
        <div className='text-white'>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
        </div>
    </div>
  )
}

export default Clickables