import React from "react";
import { SectionTitle } from "../shared/SectionTitle";
import { ScrollArrow } from "../shared/ScrollArrow";
import OutTeam1 from './../../assets/img/ourTeam1.png';
import OutTeam2 from './../../assets/img/ourTeam2.png';
import OutTeam3 from './../../assets/img/ourTeam3.png';
import './OurTeam.scss';

export const OurTeam = () => {
  const ourTeamList = [
    {
      id: 0,
      src: OutTeam1,
      name: 'Mark Virchenko',
      position: 'CTO',
      description: [
        {
          id: 100,
          text: '10+ successfully launched startups'
        },
        {
          id: 101,
          text: '6+ years of blockchain development experience'
        },
      ]
    },
    {
      id: 1,
      src: OutTeam2,
      name: 'Evgeniy Kirichenko',
      position: 'COO',
      description: [
        {
          id: 100,
          text: '10+ years in C-level management'
        },
        {
          id: 101,
          text: 'Institutional Sales, DeFi expert'
        },
      ]
    },
    {
      id: 2,
      src: OutTeam3,
      name: 'German Solovyov',
      position: 'CFO',
      description: [
        {
          id: 100,
          text: '10+ years in FinTech and Consulting'
        },
        {
          id: 101,
          text: 'Extensive experience in DeFi and blockchain'
        },
      ]
    }
  ]
  return (
    <section className="our-team">
      <ScrollArrow />
      <SectionTitle>Our team</SectionTitle>
      <div className="our-team-list">
        {
          ourTeamList.map((item) => (
            <div key={item.id} className="our-team-list-item">
              <div className="our-team-list-item-wrapper">
                <img src={item.src} alt="Person" />
                <div className="our-team-list-item-wrapper-name">{item.name}</div>
                <div className="our-team-list-item-wrapper-position">{item.position}</div>
              </div>
              <ul>
                {
                  item.description.map((el) => (
                    <li key={el.id}>{el.text}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
      <ScrollArrow />
      <button className="our-team-button">Contact us</button>
    </section>
  )
}