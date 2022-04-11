import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gibson__footer'>
      <div className="gibson__footer__contain container">
      <div className='divider__line'/>
      <div className="gibson__footer-container ">
        <div className="gibson__footer-logo-content">
          <img src={logo} alt="gibson logo" />
          <p>Ikeja, Lagos</p>
          <p>All Rights Reserved</p>
        </div>
        <div className="gibson__footer-links">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="gibson__footer-company">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Our Mission, Vision and Values</a></li>
          </ul>
        </div>
        <div className="gibson__footer-contact">
          <h4>Get in Touch</h4>
          <p>Ikeja, Lagos</p>
          <p>(234) 903 626 9576</p>
          <p>phemiwrites@gmail.com</p>
          <p>UX Design by Ronas IT</p>
        </div>
      </div>
      </div>
      <div className="gibson__footer-copyright">

      </div>
    </div>
  )
}

export default Footer