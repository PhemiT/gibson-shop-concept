import React from 'react'
import './navbar.css'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { RiShoppingBagLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='gibson__nav container'>
      <div className="gibson__menu-icon">
        <span><HiOutlineMenuAlt4 /></span>
      </div>
      <div className='gibson__nav-logo'>
        <img src={logo} alt="gibson logo" />
      </div>
      <div className="gibson__nav-cart">
        <span><RiShoppingBagLine /></span>
      </div>
    </div>
  )
}

export default Navbar