import React, { useState, useEffect } from 'react';

import ClubImg from './../../assets/img/club.png';
import CourseImg from './../../assets/img/course.png';
import EnglishCoursesImg from './../../assets/img/englishCourses.png';
import MentoringImg from './../../assets/img/mentoring.png';
import SchoolImg from './../../assets/img/school.png';
import TeamBuildingImg from './../../assets/img/teamBuilding.png';

import { SectionTitle } from '../shared/SectionTitle';
import { Texture } from '../shared/Texture';
import './Programs.scss';

export const Programs = () => {
  const programsList = [
    {
      id: 0,
      // eslint-disable-next-line react/jsx-key
      title: ['Blockchain', <br />, 'development school'],
      imageSrc: SchoolImg,
    },
    {
      id: 1,
      // eslint-disable-next-line react/jsx-key
      title: ['blockchain', <br />, 'basic course'],
      imageSrc: CourseImg,
    },
    {
      id: 2,
      // eslint-disable-next-line react/jsx-key
      title: ['Mentoring', <br />, 'programs'],
      imageSrc: MentoringImg,
    },
    {
      id: 3,
      // eslint-disable-next-line react/jsx-key
      title: ['Blockchain', <br />, 'Security club'],
      imageSrc: ClubImg,
    },
    {
      id: 4,
      // eslint-disable-next-line react/jsx-key
      title: ['English', <br />, 'courses'],
      imageSrc: EnglishCoursesImg,
    },
    {
      id: 5,
      // eslint-disable-next-line react/jsx-key
      title: ['Educational', <br />, 'team buildings'],
      imageSrc: TeamBuildingImg,
    },
  ];

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setScreenWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <section className="programs">
      <SectionTitle>
        {screenWidth >= 1024 ? 'Join our programs' : 'Programs'}
      </SectionTitle>
      <div className="programs-list">
        {programsList.map((item) => (
          <div key={item.id} className="programs-list-item">
            <img loading="lazy" src={item.imageSrc} alt="Education" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <Texture
        textureStyles={{ left: '-70%', top: '0%', transform: 'scale(0.7)' }}
      />
    </section>
  );
};
