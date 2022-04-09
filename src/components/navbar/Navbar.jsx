import React, { useState } from 'react'
import './navbar.css'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { RiShoppingBagLine } from 'react-icons/ri'
import { IoCloseSharp } from 'react-icons/io5'
import logo from '../../assets/logo.svg'

const Menu = () => {
  <>
    
  </>
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gibson__nav container'>
      <div className="gibson__menu-icon scale-in-center">
        {toggleMenu
          ?<IoCloseSharp onClick={() => setToggleMenu(false)} />
          :<HiOutlineMenuAlt4 onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="open__menu-container scale-in-tl">
            <div className="gibson__open-menu">
              <p><a href='#'>Home</a></p>
              <p><a href='#'>Shop</a></p>
              <p><a href='#'>About</a></p>        
            </div>
          </div>
        )}
      </div>
      <div className='gibson__nav-logo scale-in-center'>
        <img src={logo} alt="gibson logo" />
      </div>
      <div className="gibson__nav-cart scale-in-center">
        <span><RiShoppingBagLine /></span>
      </div>
    </div>
  )
}

export default Navbar