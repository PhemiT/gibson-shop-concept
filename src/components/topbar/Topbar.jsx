import React from 'react'
import './topbar.css'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Topbar = () => {
  return (
    <div className='gibson__topbar'>
      <div className='container gibson__topbar-nav'>
        <p>Find a Dealer</p>
        <p>United States <span><RiArrowDropDownLine /></span></p>
      </div>
    </div>
  )
}

export default Topbar