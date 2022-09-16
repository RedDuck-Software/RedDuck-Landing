import React from 'react';
import { Link } from "react-router-dom";
import { Texture } from './../shared/Texture';
import './Header.scss';
 
export const Header = () => {
  return (
    <header>
      <Texture textureStyles={{left: '-552px', top: '-670px'}}/>
      <nav>
        <li><Link to="/expertise">Expertise</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/cases">Cases</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li>Blog</li>
        <li><Link to="/contacts">Contact us</Link></li>
        <li>About us</li>
        <li className='lang-changer'>En</li>
      </nav>
    </header>
  )
}