import React from "react";
import { Texture } from "../shared/Texture";
import './ServicesDescription.scss';

export const ServicesDescription = (props: any) => {

  return (
    <section className="services-description" style={props.style}>
      <div className="services-description-list">
        {
          props.servicesDescription.map((item: any) => (
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