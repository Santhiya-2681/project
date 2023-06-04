import React from 'react'
import { Link } from 'react-router-dom'
import Netflixlog from '../../Assets/Images/Front.png'

import './error.css'
const Error = () => {
  return (
    <div className='error-container' >
        <img className='error-img' src={Netflixlog}/>
        <h1 className='error-h1'>Lost your way?</h1>
        <h2  className='error-h2'> sorry, we can't find page.You'll find lost to explore on the home page</h2>
        <Link to={"/"}><button  className='error-btn'>Netflix Home</button></Link>
        <h2 className='error-h2'>Error Code NSES-404</h2>
    </div>
  )
}

export default Error