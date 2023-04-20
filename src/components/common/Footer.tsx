import React, { useEffect } from 'react';
import { Texture } from './../shared/Texture';
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as LogoHorizontal } from './../../assets/img/logo-horizontal.svg';
import { ReactComponent as FacebookIcon } from './../../assets/img/icons/fb-icon.svg';
import { ReactComponent as LinkedinIcon } from './../../assets/img/icons/linkedin-icon.svg';
import DouLogo from './../../assets/img/dou-logo.png';
import MediumLogo from './../../assets/img/medium__logo.png';
import Logo from './../../assets/img/logo-text-bg.png';
import './Footer.scss';

export const Footer = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]);
  return (
    <footer className='footer'>
      <div className="footer-parts">
        <div className="footer-parts-left">
          <LogoHorizontal />
          <p>© {new Date().getFullYear()}. All rights reserved. <br/>Akademika Pavlova 155 Street, Kharkiv, Ukraine</p>
        </div>
        <div className="footer-parts-right">
          <div className="footer-parts-right-pages">
            <p><Link to="/expertise">Expertise</Link></p>
            <p><Link to="/services">Services</Link></p>
            <p><Link to="/cases">Partners & cases</Link></p>
            <p><Link to="/education">Education</Link></p>
            <p><Link to="/blog">Blog</Link></p>
            <p><Link to="/contacts">Contact us</Link></p>
            <p><Link to="/about">About us</Link></p>
          </div>
          <p className='footer-parts-right-address'>© 2023. All rights reserved. <br/>Akademika Pavlova 155 Street, Kharkiv, Ukraine</p>
          <div className="footer-parts-right-socials">
            <a href='https://jobs.dou.ua/companies/red-duck/' className="footer-parts-right-socials-icon">
              <img loading="lazy" src={DouLogo} alt="Dou" />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100076952286530' className="footer-parts-right-socials-icon">
              <FacebookIcon />
            </a>
            <a href='https://redduck.medium.com/' className="footer-parts-right-socials-icon">
              <img loading="lazy" src={MediumLogo} alt="Dou" id='medium'/>
            </a>
            <a href='https://www.linkedin.com/company/redduckdev/' className="footer-parts-right-socials-icon">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
      <Texture textureStyles={{left: '50%', bottom: '-1700px', transform: 'translateX(-50%) scale(1.1)'}}/>
      <img loading="lazy" src={Logo} alt='Redduck logo' className='redduck-logo'/>
    </footer>
  )
}
