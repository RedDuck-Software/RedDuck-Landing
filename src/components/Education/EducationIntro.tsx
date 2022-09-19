import React from "react";
import EducationImg from './../../assets/img/education.png'
import { ScrollArrow } from "../shared/ScrollArrow";
import { Texture } from "../shared/Texture";
import './EducationIntro.scss';

export const EducationIntro = () => {
  return (
    <section className="education">
      <div className="education-intro">
        <div className="education-intro-title">
          We make sure that our employees and everyone else can improve their knowledge and soft skills with RedDuck
        </div>
        <img src={EducationImg} alt="Education" />
        <Texture textureStyles={{left: '75%', top: '35%', transform: 'translateX(-50%) scale(1.5)'}}/>
      </div>
      <ScrollArrow />
    </section>
  )
}