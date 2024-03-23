import React from 'react'
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <div className=' mt-0 ml-2 w-[1224px]'>
          <nav className='h-[39px]'>
              <img className='h-16' src={logo} alt="" />
              <div>
                  <ul>
                      <li><a href=""></a></li>
                      <li><a href=""></a></li>
                      <li><a href=""></a></li>
                  </ul>
              </div>
              
      </nav>
    </div>
  )
}

export default Navbar
