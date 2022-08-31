import React from 'react';
import { ReactComponent as LogoHorizontal } from './../../assets/img/logo-horizontal.svg';
import { ReactComponent as ArrowLeft } from './../../assets/img/icons/arrow-left-icon.svg';
import { ReactComponent as ScrollVertical } from './../../assets/img/scroll-vertical.svg';
import { Texture } from './../shared/Texture';
import './Intro.scss';
import introChart from './../../assets/img/chart.png';

export const Intro = () => {
  return (
    <section className='intro'>
      <div className="intro-left">
        <LogoHorizontal />
        <p> R&D company with proven expertise in Blockchain, Crypto, Trading, Fintech and Banking industries </p>
      </div>
      <div className="intro-right">
        <Texture textureStyles={{left: '870px', top: '30px'}}/>
        <Texture textureStyles={{left: '870px', top: '30px', transform: 'scale(0.5)'}}/>
        <Texture textureStyles={{left: '870px', top: '30px'}}/>
      </div>
      <img src={introChart} className="intro-chart" />
      <div className="intro-scroll">
        <p>scroll</p>
        <ArrowLeft />
        <ScrollVertical />
      </div>
    </section>
  )
}