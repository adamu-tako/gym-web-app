import './Footer.css'
import React from 'react';
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return ( 
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="blur blur-f1"></div>
        <div className="blur blur-f2"></div>
        <div className="social-icons">
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={Linkedin} alt="" />
        </div>
        <div className="logo">
        <img src={Logo} alt="" />
        </div>
      </div>
    </div>
   );
}
 
export default Footer;