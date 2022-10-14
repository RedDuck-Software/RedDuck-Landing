import React from "react";
import { SectionTitle } from "../shared/SectionTitle";
import Achievements1 from './../../assets/img/achievements-1.png';
import Achievements2 from './../../assets/img/achievements-2.png';
import Achievements3 from './../../assets/img/achievements-3.png';
import Achievements4 from './../../assets/img/achievements-4.png';
import Achievements5 from './../../assets/img/achievements-5.png';
import Achievements6 from './../../assets/img/achievements-6.png';
import RoadmapArrow from './../../assets/img/roadmap-arrow.png';
import { ReactComponent as GradientArrow } from './../../assets/img/icons/gradient-arrow-bottom.svg';
import { ScrollArrow } from "../shared/ScrollArrow";
import './Achievements.scss';

export const Achievements = () => {
  const achievementsList = [
    {
      id: 0,
      date: '03. 2020',
      title: 'Discovery and gathering of the team',
      imageSrc: Achievements1
    },
    {
      id: 1,
      date: '05. 2020',
      title: 'First project in a field of automated trading',
      imageSrc: Achievements2
    },
    {
      id: 2,
      date: '06. 2020',
      title: 'First Blockchain Project',
      imageSrc: Achievements3
    },
    {
      id: 3,
      date: '09. 2020',
      title: 'Start of the own Machine Learning startup development',
      imageSrc: Achievements4
    },
    {
      id: 4,
      date: '12. 2020',
      title: 'Placing at All-Ukrainian Blockchain Hackathon',
      imageSrc: Achievements5
    },
    {
      id: 5,
      date: '01. 2021',
      title: 'Raising investments, company re-branding, and expanding the team',
      imageSrc: Achievements6
    },
  ]
  return (
    <section className="achievements">
      <SectionTitle>Achievements</SectionTitle>
      <div className="achievements-list desktop">
        {
          achievementsList.map((item) => (
            <div key={item.id} className="achievements-list-item">
              <div className="achievements-list-item-left">
                <div className="achievements-list-item-left-id">{item.id + 1}</div>
                <div className="achievements-list-item-left-date">{item.date}</div>
              </div>
              <div className="arrows">
                <img src={RoadmapArrow} alt="Arrow" className="achievements-list-item-roadmap" />
                <GradientArrow className="achievements-list-item-arrow" />
              </div>
              <div className="achievements-list-item-right">
                <img src={item.imageSrc} alt="Achievement" />
                <p>{item.title}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="achievements-list mobile">
        {
          achievementsList.map((item) => (
            <div key={item.id} className="achievements-list-item">
              <div className="achievements-list-item-left">
                <div className="achievements-list-item-left-id">{item.id + 1}</div>
                <div className="achievements-list-item-left-date">{item.date}</div>
              </div>
              <div className="arrows">
                <img src={RoadmapArrow} alt="Arrow" className="achievements-list-item-roadmap" />
                <GradientArrow className="achievements-list-item-arrow" />
              </div>
              <div className="achievements-list-item-right">
                <img src={item.imageSrc} alt="Achievement" />
                <p>{item.title}</p>
              </div>
            </div>
          ))
        }
      </div>
      <ScrollArrow />
      <SectionTitle>Services We Provide</SectionTitle>
    </section>
  )
}