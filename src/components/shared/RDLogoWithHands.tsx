import React from 'react';

import { Texture } from './Texture';
import './RDLogoWithHands.scss';
import BlueGear from './../../assets/img/gearBlue.png';
import RedGear from './../../assets/img/gearRed.png';
import HandBlue from './../../assets/img/handBlue.png';
import HandRed from './../../assets/img/handRed.png';
import LogoPart1 from './../../assets/img/logoPart1.png';
import LogoPart2 from './../../assets/img/logoPart2.png';

export const RDLogoWithHands = () => {
  return (
    <>
      <div className="logo-with-hands">
        <img
          loading="lazy"
          src={LogoPart1}
          alt="Logo"
          className="logo-with-hands-logo"
        />
        <img
          loading="lazy"
          src={LogoPart2}
          alt="Logo"
          className="logo-with-hands-logo"
        />
        <div className="logo-with-hands-gear">
          <img loading="lazy" src={RedGear} alt="Logo" />
          <img loading="lazy" src={BlueGear} alt="Logo" />
        </div>
        <img
          loading="lazy"
          src={HandRed}
          alt="Hand"
          className="logo-with-hands-hands-red"
        />
        <img
          loading="lazy"
          src={HandBlue}
          alt="Hand"
          className="logo-with-hands-hands-blue"
        />
      </div>
      <Texture
        textureStyles={{
          left: '50%',
          top: '-10%',
          transform: 'translateX(-50%) scale(0.7)',
        }}
      />
    </>
  );
};
