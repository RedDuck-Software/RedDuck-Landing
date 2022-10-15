import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Texture } from './../shared/Texture';
import { ReactComponent as LogoHorizontal } from './../../assets/img/logo-horizontal.svg';
import { ReactComponent as InstagramIcon } from './../../assets/img/icons/inst-icon.svg';
import { ReactComponent as FacebookIcon } from './../../assets/img/icons/fb-icon.svg';
import { ReactComponent as LinkedinIcon } from './../../assets/img/icons/linkedin-icon.svg';
import { ReactComponent as TwitterIcon } from './../../assets/img/icons/twitter-icon.svg';
import './Header.scss';
 
export const Header = () => {
  const location = useLocation()
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  }
  useEffect(() => {
    let htmlTag = document.querySelector('html');
    !isMenuOpened ? htmlTag!.style.overflowY = 'auto' : htmlTag!.style.overflowY = 'hidden'
  }, [location, isMenuOpened])
  return (
    <header className={location.pathname !== '/' ? 'header-index' : ''}>
      <Texture className="texture" textureStyles={{left: '-1050px', top: '-1000px', transform: 'scale(0.5)'}}/>
      <Link to="/"><LogoHorizontal className='header-logo'/></Link>
      <nav>
        <li><Link to="/expertise">Expertise</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/cases">Cases</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contacts">Contact us</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li className='lang-changer'>En</li>
      </nav>
      <div onClick={openMenu} className={isMenuOpened ? 'header-menu-icon active' : 'header-menu-icon'}>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
      </div>
      <div className={isMenuOpened ? 'header-menu active' : 'header-menu'}>
        <ul>
          <li><Link to="/expertise" onClick={() => {setIsMenuOpened(false)}}>Expertise</Link></li>
          <li><Link to="/services" onClick={() => {setIsMenuOpened(false)}}>Services</Link></li>
          <hr/>
          <li><Link to="/cases" onClick={() => {setIsMenuOpened(false)}}>Cases</Link></li>
          <li><Link to="/career" onClick={() => {setIsMenuOpened(false)}}>Career</Link></li>
          <hr/>
          <li><Link to="/education" onClick={() => {setIsMenuOpened(false)}}>Education</Link></li>
          <li><Link to="/blog" onClick={() => {setIsMenuOpened(false)}}>Blog</Link></li>
          <hr/>
          <li><Link to="/contacts" onClick={() => {setIsMenuOpened(false)}}>Contact us</Link></li>
          <li><Link to="/about" onClick={() => {setIsMenuOpened(false)}}>About us</Link></li>
        </ul>
        <div className="header-menu-icons">
          <div className="header-menu-icons-icon">
            <InstagramIcon />
          </div>
          <div className="header-menu-icons-icon">
            <FacebookIcon />
          </div>
          <div className="header-menu-icons-icon">
            <TwitterIcon />
          </div>
          <div className="header-menu-icons-icon">
            <LinkedinIcon />
          </div>
        </div>
      </div>
    </header>
  )
}