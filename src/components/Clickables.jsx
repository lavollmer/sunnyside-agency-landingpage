import React from 'react'
import { Link } from 'react-router-dom';

const Clickables = () => {
  return (
    <div>
        <div className='text-white'>
            <Link to="/about">About</Link>
        </div>
    </div>
  )
}

export default Clickables