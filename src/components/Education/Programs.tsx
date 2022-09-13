import React from "react";
import { SectionTitle } from "../shared/SectionTitle";
import SchoolImg from './../../assets/img/school.png';
import CourseImg from './../../assets/img/course.png';
import MentoringImg from './../../assets/img/mentoring.png';
import ClubImg from './../../assets/img/club.png';
import EnglishCoursesImg from './../../assets/img/englishCourses.png';
import TeamBuildingImg from './../../assets/img/teamBuilding.png';
import './Programs.scss';

export const Programs = () => {
  const programsList = [
    {
      id: 0,
      title: ['Blockchain', <br/> ,'development school'],
      imageSrc: SchoolImg
    },
    {
      id: 1,
      title: ['blockchain', <br/> ,'basic course'],
      imageSrc: CourseImg
    },
    {
      id: 2,
      title: ['Mentoring', <br/> ,'programs'],
      imageSrc: MentoringImg
    },
    {
      id: 3,
      title: ['Blockchain', <br/> ,'Security club'],
      imageSrc: ClubImg
    },
    {
      id: 4,
      title: ['English', <br/> ,'courses'],
      imageSrc: EnglishCoursesImg
    },
    {
      id: 5,
      title: ['Educational', <br/> ,'team buildings'],
      imageSrc: TeamBuildingImg
    }
  ]

  return (
    <section className="programs">
      <SectionTitle>Domain</SectionTitle>
      <div className="programs-list">
        {
          programsList.map((item) => (
            <div key={item.id} className="programs-list-item">
              <img src={item.imageSrc} alt="Education" />
              <p>{item.title}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}