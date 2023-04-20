import React from 'react';

import OutTeam1 from './../../assets/img/ourTeam1.png';

import { ScrollArrow } from '../shared/ScrollArrow';
import { SectionTitle } from '../shared/SectionTitle';
import { Texture } from '../shared/Texture';

import './OurTeam.scss';
import { useNavigate } from 'react-router-dom';

export const OurTeam = () => {
  const navigate = useNavigate();
  const ourTeamList = [
    {
      id: 0,
      src: OutTeam1,
      name: 'Mark Virchenko',
      position: 'CTO',
      description: [
        {
          id: 100,
          text: '10+ successfully launched startups',
        },
        {
          id: 101,
          text: '6+ years of blockchain development experience',
        },
      ],
    },
  ];
  return (
    <section className="our-team">
      <ScrollArrow />
      <SectionTitle>Our team</SectionTitle>
      <div className="our-team-list">
        {ourTeamList.map((item) => (
          <div key={item.id} className="our-team-list-item desktop">
            <div className="our-team-list-item-wrapper">
              <img loading="lazy" src={item.src} alt="Person" />
              <div className="our-team-list-item-wrapper-name">{item.name}</div>
              <div className="our-team-list-item-wrapper-position">
                {item.position}
              </div>
            </div>
            <ul>
              {item.description.map((el) => (
                <li key={el.id}>{el.text}</li>
              ))}
            </ul>
          </div>
        ))}
        {ourTeamList.map((item) => (
          <div key={item.id} className="our-team-list-item tablet">
            <img
              loading="lazy"
              className="our-team-list-item-left"
              src={item.src}
              alt="Person"
            />
            <div className="our-team-list-item-right">
              <div className="our-team-list-item-right-name">{item.name}</div>
              <div className="our-team-list-item-right-position">
                {item.position}
              </div>
              <ul>
                {item.description.map((el) => (
                  <li key={el.id}>{el.text}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {ourTeamList.map((item) => (
          <div key={item.id} className="our-team-list-item mobile">
            <div className="our-team-list-item-wrapper">
              <img loading="lazy" src={item.src} alt="Person" />
              <div className="our-team-list-item-wrapper-name">{item.name}</div>
              <div className="our-team-list-item-wrapper-position">
                {item.position}
              </div>
            </div>
            <ul>
              {item.description.map((el) => (
                <li key={el.id}>{el.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ScrollArrow />
      <button className="our-team-button" onClick={() => navigate('/contacts')}>
        Contact us
      </button>
      <Texture
        textureStyles={{ left: '-70%', top: '10%', transform: 'scale(0.7)' }}
      />
    </section>
  );
};
