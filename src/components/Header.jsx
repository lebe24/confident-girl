import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

const Header = () => {
  return (
    <div className='bg-[#0F103F] h-screen'>
        <Navbar />
        <Banner />
    </div>
  )
}

export default Header