import React, { useState } from 'react';
import { ReactComponent as LogoHorizontal } from './../../assets/img/logo-horizontal.svg';
import { ReactComponent as ArrowLeft } from './../../assets/img/icons/arrow-left-icon.svg';
import { ReactComponent as ScrollVertical } from './../../assets/img/scroll-vertical.svg';
import { Texture } from './../shared/Texture';
import ReactPlayer from 'react-player'
import './Intro.scss';
import introChart from './../../assets/img/chart.png';
import PlayButton from './../../assets/img/play-button.png';

export const Intro = () => {
  const [isVideoOpened, setIsVideoOpened] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className='intro'>
      <div onClick={() => {setIsVideoOpened(!isVideoOpened)}} className={isVideoOpened ? 'intro-player active' : 'intro-player'}>
        <ReactPlayer
          playing={isVideoOpened}
          onClick={(event: any) => {event.stopImmediatePropagation()}}
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          controls
        />
      </div>
      <div className="intro-left">
        <LogoHorizontal />
        <p> R&D company with proven expertise in Blockchain, Crypto, Trading, Fintech and Banking industries </p>
      </div>
      <div className="intro-right">
        <img onClick={() => {setIsVideoOpened(!isVideoOpened)}} src={PlayButton} alt="Button" className='intro-right-button'/>
        <Texture textureStyles={{right: '-20rem', top: '-30rem', transform: 'scale(0.5)'}}/>
        <Texture textureStyles={{right: '-20rem', top: '-30rem', transform: 'scale(0.3)'}}/>
        <Texture textureStyles={{right: '-20rem', top: '-30rem', transform: 'scale(0.15)'}}/>
      </div>
      <img src={introChart} className="intro-chart" alt='intro-chart'/>
      <div className="intro-scroll">
        <p>scroll</p>
        <ArrowLeft />
        <ArrowLeft />
        <ScrollVertical />
      </div>
    </section>
  )
}