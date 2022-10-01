import React from 'react';
import './Footer.scss';
import { Texture } from './../shared/Texture';
import { ReactComponent as LogoHorizontal } from './../../assets/img/logo-horizontal.svg';
import { ReactComponent as InstagramIcon } from './../../assets/img/icons/inst-icon.svg';
import { ReactComponent as FacebookIcon } from './../../assets/img/icons/fb-icon.svg';
import { ReactComponent as LinkedinIcon } from './../../assets/img/icons/linkedin-icon.svg';
import { ReactComponent as TwitterIcon } from './../../assets/img/icons/twitter-icon.svg';
import Logo from './../../assets/img/logo-text-bg.png';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-parts">
        <div className="footer-parts-left">
          <LogoHorizontal />
          <p>© 2023. All rights reserved. <br/>Akademika Pavlova 155 Street, Kharkiv, Ukraine</p>
        </div>
        <div className="footer-parts-right">
          <div className="footer-parts-right-pages">
            <p>Expertise</p>
            <p>Services</p>
            <p>Partners & cases</p>
            <p>Career</p>
            <p>Education</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>About us</p>
          </div>
          <p className='footer-parts-right-address'>© 2023. All rights reserved. <br/>Akademika Pavlova 155 Street, Kharkiv, Ukraine</p>
          <div className="footer-parts-right-socials">
            <div className="footer-parts-right-socials-icon">
              <InstagramIcon />
            </div>
            <div className="footer-parts-right-socials-icon">
              <FacebookIcon />
            </div>
            <div className="footer-parts-right-socials-icon">
              <TwitterIcon />
            </div>
            <div className="footer-parts-right-socials-icon">
              <LinkedinIcon />
            </div>
          </div>
        </div>
      </div>
      <Texture textureStyles={{left: '50%', bottom: '-1700px', transform: 'translateX(-50%) scale(1.1)'}}/>
      <img src={Logo} alt='Redduck logo' className='redduck-logo'/>
    </footer>
  )
}