import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='gibson__header container'>
      <div className='divider__line'/>
      <div className='gibson__header-content'>
        <div className="gibson__header-heading">
          <p>Introducing</p>
          <h1>The Modern Collection</h1>
        </div>
        <div className="gibson__header-text">
          <p>
          The Gibson Modern Collection continues a proud tradition of innovation and excellence by combining exciting new player-friendly features with their classic design, resulting in guitars with lots of mojo and all the appointments that discerning modern guitarists require.
          </p>
        </div>
        <div className='gibson__header-cta'>
          <div className='gibson__header-cta-circle'>
            <p>Shop Now</p>
          </div>
        </div>
      </div>
      <div className='divider__line'/>
    </div>
  )
}

export default Header