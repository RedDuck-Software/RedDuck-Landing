import React from 'react';
import './Mission.scss'
import { SectionTitle } from '../shared/SectionTitle';
import { ReactComponent as IllustrationTop1 } from './../../assets/img/illustrations/mission-top-1.svg';
import { ReactComponent as IllustrationBottom1 } from './../../assets/img/illustrations/mission-bottom-1.svg';
import { ReactComponent as IllustrationTop2 } from './../../assets/img/illustrations/mission-top-2.svg';
import { ReactComponent as IllustrationBottom2 } from './../../assets/img/illustrations/mission-bottom-2.svg';
import { ReactComponent as IllustrationCentral2 } from './../../assets/img/illustrations/mission-central-2.svg';
import { ReactComponent as IllustrationTop3 } from './../../assets/img/illustrations/mission-top-3.svg';
import { ReactComponent as IllustrationBottom3 } from './../../assets/img/illustrations/mission-bottom-3.svg';
import { Texture } from './../shared/Texture';
import { ScrollArrow } from '../shared/ScrollArrow';

export const Mission = () => {
  return (
    <section className="mission">
      <SectionTitle>Mission</SectionTitle>
      <div className="mission-items">
        <div className="mission-items-item">
          <div className="mission-items-item-illustration">
            <IllustrationTop1 className='mission-items-item-illustration-top'/>
            <IllustrationBottom1 className='mission-items-item-illustration-bottom'/>
          </div>
          <p className="mission-items-item-text">
            Our mission is to make every enterprise more  intelligent and secure, by utilizing blockchain technologies.
          </p>
        </div>
        <div className="mission-items-item">
          <div className="mission-items-item-illustration">
            <IllustrationTop2 className='mission-items-item-illustration-top'/>
            <IllustrationCentral2 className='mission-items-item-illustration-central'/>
            <IllustrationBottom2 className='mission-items-item-illustration-bottom'/>
          </div>
          <p className="mission-items-item-text">
            We provide powerful software solutions and expert services that enable everyone to use innovative technologies.
          </p>
        </div>
        <div className="mission-items-item">
          <div className="mission-items-item-illustration">
            <IllustrationTop3 className='mission-items-item-illustration-top'/>
            <IllustrationBottom3 className='mission-items-item-illustration-bottom'/>
          </div>
          <p className="mission-items-item-text">
            We want to bring the world to mass crypto adoption and include it in all areas of activity life.
          </p>
        </div>
      </div>
      <Texture textureStyles={{right: '-650px', top: '200px'}}/>
      <ScrollArrow />
    </section>
  )
}