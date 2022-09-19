import React from 'react';
import './References.scss';
import { SectionTitle } from '../shared/SectionTitle';
import { Texture } from './../shared/Texture';
import clutchLogo from './../../assets/img/clutch-logo.png';
import douLogo from './../../assets/img/dou-logo.png';
import mediumLogo from './../../assets/img/medium-logo.png';
import linkedinLogo from './../../assets/img/linkedin-logo.png';
import upworkLogo from './../../assets/img/upwork-logo.png';

export const References = () => {
  return (
    <section className="references">
      <SectionTitle>References</SectionTitle>
      <div className="references-items">
        <div className="references-items-top">
          <div className="references-items-item">
            <img src={clutchLogo} alt="Clutch" />
          </div>
          <div className="references-items-item">
            <img src={douLogo} alt="Dou" />
          </div>
          <div className="references-items-item">
            <img src={upworkLogo} alt="Upwork" />
          </div>
        </div>
        <div className="references-items-bottom">
          <div className="references-items-item">
            <img src={mediumLogo} alt="Medium" />
          </div>
          <div className="references-items-item">
            <img src={linkedinLogo} alt="Linked in" /></div> 
        </div>
      </div>
      <Texture textureStyles={{left: '-1000px', top: '50%', transform: 'translateY(-50%) scale(0.5)'}}/>
    </section>
  )
}