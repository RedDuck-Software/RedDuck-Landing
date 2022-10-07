import React, { useState, useEffect } from "react";
import { ScrollArrow } from "../shared/ScrollArrow";
import RDServices from './../../assets/img/rdServices.png';
import EmployeeServices from './../../assets/img/employeeServices.png';
import CLevelServices from './../../assets/img/cLevelServices.png';
import { Texture } from "../shared/Texture";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import './ServicesList.scss';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const ServicesList = () => {
  const servicesList = [
    {
      id: 0,
      titleHTML: ['R&D', <br/> ,'as a service'],
      title: 'R&D as a service',
      imageSrc: RDServices
    },
    {
      id: 1,
      titleHTML: ['EMPLOYEE', <br/> ,'as a service'],
      title: 'EMPLOYEE as a service',
      imageSrc: EmployeeServices
    },
    {
      id: 2,
      titleHTML: ['C-LEVEL', <br/> ,' as a service'],
      title: 'C-LEVEL as a service',
      imageSrc: CLevelServices
    }
  ]

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setScreenWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  return (
    <section className="services">
      {
        (screenWidth >= 1023) ?
        <div className="services-list">
          {
            servicesList.map((item) => (
              <div key={item.id} className="services-list-item">
                <div className="services-list-item-id">{item.id + 1}</div>
                <img src={item.imageSrc} alt={item.title} />
                <div className="services-list-item-title">{item.titleHTML}</div>
              </div>
            ))
          }
        </div>
        :
        <Swiper
          className="services-list"
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          width={290}
          loop={true}
          loopAdditionalSlides={8}
          spaceBetween={16}
          navigation
        >
          {
            servicesList.map((item) => (
              <SwiperSlide key={item.id} className="services-list-item">
                <div className="services-list-item-id">{item.id + 1}</div>
                <img src={item.imageSrc} alt={item.title} />
                <div className="services-list-item-title">{item.titleHTML}</div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      }
      <Texture textureStyles={{left: '50%', top: '30%', transform: 'translateX(-50%) scale(0.7)'}}/>
      <ScrollArrow />
    </section>
  )
}