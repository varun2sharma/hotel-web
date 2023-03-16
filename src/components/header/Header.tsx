import React from 'react'
import Navbar from '../navbar/Navbar'
import Strip from '../strip/Strip'
export const Header = () => {
  return (
    <div className='header'>
      <Navbar/>
      <Strip/>
    </div>
  )
}

export default Header