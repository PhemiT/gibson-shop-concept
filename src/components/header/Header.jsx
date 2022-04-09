import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='gibson__header container'>
      <div className='divider__line fade-in-left'/>
      <div className='gibson__header-content'>
        <div className="gibson__header-heading fade-in-right">
          <p>Introducing</p>
          <h1>The Modern Collection</h1>
        </div>
        <div className="gibson__header-text fade-in-right">
          <p>
          The Gibson Modern Collection continues a proud tradition of innovation and excellence by combining exciting new player-friendly features with their classic design, resulting in guitars with lots of mojo and all the appointments that discerning modern guitarists require.
          </p>
        </div>
        <div className='gibson__header-cta fade-in-right'>
          <div className='gibson__header-cta-circle pulsate-bck'>
            <p>Shop Now</p>
          </div>
        </div>
      </div>
      <div className='divider__line two fade-in-left'/>
    </div>
  )
}

export default Header