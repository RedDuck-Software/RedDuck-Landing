import React from "react";
import { ScrollArrow } from "../shared/ScrollArrow";
import RDServices from './../../assets/img/rdServices.png';
import EmployeeServices from './../../assets/img/employeeServices.png';
import CLevelServices from './../../assets/img/cLevelServices.png';
import { Texture } from "../shared/Texture";
import './ServicesList.scss';

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

  return (
    <section className="services">
      <div className="services-list">
        {
          servicesList.map((item, index) => (
            <div key={item.id} className="services-list-item">
              <div className="services-list-item-id">{item.id + 1}</div>
              <img src={item.imageSrc} alt={item.title} />
              <div className="services-list-item-title">{item.titleHTML}</div>
            </div>
          ))
        }
      </div>
      <Texture textureStyles={{left: '30%', top: '22%'}}/>
      <ScrollArrow />
    </section>
  )
}