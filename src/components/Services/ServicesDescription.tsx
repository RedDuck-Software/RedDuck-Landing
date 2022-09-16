import React from "react";
import { Texture } from "../shared/Texture";
import ExperiencedTeam from './../../assets/img/experiencedTeam.png';
import ValueTime from './../../assets/img/valueTime.png';
import AttentionSecurity from './../../assets/img/attentionSecurity.png';
import './ServicesDescription.scss';

export const ServicesDescription = () => {
  const servicesDescription = [
    {
      id: 0,
      title: 'Experienced team',
      description: [<strong>RedDuck team consists of experienced managers and developers,</strong>, ' the expertise of most of us is confirmed by a MS degree in Computer Science and similar fields and by successful practical experience.'],
      imageSrc: ExperiencedTeam
    },
    {
      id: 1,
      title: 'We value your time',
      description: [<strong>We know how to value time,</strong>, ' therefore we assemble a special team ready to work within a few days. We can quickly increase or decrease the size according to the needs of the client.'],
      imageSrc: ValueTime
    },
    {
      id: 2,
      title: 'Attention to security ',
      description: [<strong>We pay special attention to security</strong>, ' and we understand the importance of strict security protocols that we follow at all stages of development.'],
      imageSrc: AttentionSecurity
    }
  ]

  return (
    <section className="services-description">
      <div className="services-description-list">
        {
          servicesDescription.map((item) => (
            <div key={item.id} className="services-description-list-item">
              <div className="services-description-list-item-left">
                <img src={item.imageSrc} alt={item.title} />
                <p>{item.description}</p>
              </div>
              <div className="services-description-list-item-right">
                <p>{item.title}</p>
                <Texture textureStyles={{left: '0', top: '60%'}}/>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}