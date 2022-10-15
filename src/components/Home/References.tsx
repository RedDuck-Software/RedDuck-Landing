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
  const referencesList = [
    {
      id: 0,
      name: 'Clutch',
      imgSrc: clutchLogo,
      link: 'https://clutch.co/profile/redduck'
    },
    {
      id: 1,
      name: 'Dou',
      imgSrc: douLogo,
      link: 'https://jobs.dou.ua/companies/red-duck/'
    },
    {
      id: 2,
      name: 'Upwork',
      imgSrc: upworkLogo,
      link: 'https://www.upwork.com/ag/redduck/'
    },
    {
      id: 3,
      name: 'Medium',
      imgSrc: mediumLogo,
      link: 'https://medium.com/@redduck'
    },{
      id: 4,
      name: 'Linked in',
      imgSrc: linkedinLogo,
      link: 'https://www.linkedin.com/company/redduckdev/'
    },

  ]
  return (
    <section className="references">
      <SectionTitle size='big'>References</SectionTitle>
      <div className="references-items">
        {
          referencesList.map((item) => (
            <a href={item.link} key={item.id} className="references-items-item">
              <div className="references-items-item-wrapper">
                <img src={item.imgSrc} alt={item.name} />
              </div>
            </a>
          ))
        }
      </div>
      <Texture textureStyles={{left: '-1000px', top: '50%', transform: 'translateY(-50%) scale(0.5)'}}/>
    </section>
  )
}