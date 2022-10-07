import React from "react";
import RDLogoColor from './../../assets/img/rd-logo-color.png';
import RDLogoColorMobile from './../../assets/img/rd-logo-color-mobile.png';
import AboutUsImg from './../../assets/img/about-us.png';
import AboutUs1 from './../../assets/img/about-us-1.png';
import AboutUs2 from './../../assets/img/about-us-2.png';
import AboutUs3 from './../../assets/img/about-us-3.png';
import AboutUs4 from './../../assets/img/about-us-4.png';
import AboutUs5 from './../../assets/img/about-us-5.png';
import AboutUs6 from './../../assets/img/about-us-6.png';
import AboutUs7 from './../../assets/img/about-us-7.png';
import AboutUs8 from './../../assets/img/about-us-8.png';
import { ScrollArrow } from "../shared/ScrollArrow";
import { Texture } from "../shared/Texture";
import './AboutIntro.scss';

export const AboutIntro = () => {
  const aboutList = [
    {
      id: 0,
      imageSrc: AboutUs1,
      title: 'We have experience in English-speaking markets, including the USA, Great Britain, Canada, and many European countries, including Ukraine.'
    },
    {
      id: 1,
      imageSrc: AboutUs2,
      title: 'Our main task is to help our clients implement their business goals. As a result, companies that work with us quickly find their customers and effectively reach their business goals.'
    },
    {
      id: 2,
      imageSrc: AboutUs3,
      title: 'From the first day, RedDuck becomes your business partner you can rely on.'
    },
    {
      id: 3,
      imageSrc: AboutUs4,
      title: 'Blockchain ecosystems are multifaceted, and we have experience working in every part. This helps us to implement the individual solutions required for our customers.'
    },
    {
      id: 4,
      imageSrc: AboutUs5,
      title: 'Blockchain development is a kind of art that we enjoy.'
    },
    {
      id: 5,
      imageSrc: AboutUs6,
      title: 'Regardless of the complexity of the task in the given niche, the RedDuck company achieves the result.'
    },
    {
      id: 6,
      imageSrc: AboutUs7,
      title: 'The result is the main thing we focus on. Individual solutions to issues related to the financial industry help our clients run their businesses as efficiently as possible.'
    },
    {
      id: 7,
      imageSrc: AboutUs8,
      title: 'We constantly improve the conditions of cooperation with us and reach new heights.'
    },
  ]
  return (
    <section className="about-intro">
      <div className="about-intro-wrapper">
        <p>
          RedDuck is a blockchain company engaged 
          in the development 
          of financial technologies.
        </p>
        <p className="mobile">
        We make sure that our employees and everyone else can improve their knowledge and soft skills with RedDuck
        </p>
        <img src={AboutUsImg} alt="About us" className="about-intro-img"/>
        <img src={RDLogoColor} alt="Red Duck Logo" className="about-intro-logo" />
        <img src={RDLogoColorMobile} alt="Red Duck Logo" className="about-intro-logo-mobile" />
      </div>
      <div className="about-intro-list">
        {
          aboutList.map((item) => (
            <div key={item.id} className="about-intro-list-item">
              <img src={item.imageSrc} alt="About us" />
              <p>{item.title}</p>
            </div>
          ))
        }
      </div>
      <ScrollArrow />
      <Texture textureStyles={{left: '50%', bottom: '-5rem', transform: 'translateX(-50%) scale(0.8)'}}/>
    </section>
  )
}