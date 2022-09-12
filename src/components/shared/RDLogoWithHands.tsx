import React from "react";
import { Texture } from "./Texture";
import './RDLogoWithHands.scss';
import LogoPart1 from './../../assets/img/logoPart1.png';
import LogoPart2 from './../../assets/img/logoPart2.png';
import RedGear from './../../assets/img/gearRed.png';
import BlueGear from './../../assets/img/gearBlue.png';
import HandRed from './../../assets/img/handRed.png';
import HandBlue from './../../assets/img/handBlue.png';

export const RDLogoWithHands = () => {
  return (
    <>
      <div className="logo-with-hands">
        <img src={LogoPart1} alt="Logo" className="logo-with-hands-logo"/>
        <img src={LogoPart2} alt="Logo" className="logo-with-hands-logo"/>
        <div className="logo-with-hands-gear">
          <img src={RedGear} alt="Logo"/>
          <img src={BlueGear} alt="Logo"/>
        </div>
        <img src={HandRed} alt="Hand" className="logo-with-hands-hands-red"/>
        <img src={HandBlue} alt="Hand" className="logo-with-hands-hands-blue"/>
      </div>
      <Texture textureStyles={{left: '27%', top: '50%'}}/>
    </>
  )
}