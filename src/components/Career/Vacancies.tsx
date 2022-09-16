import React from "react";
import VacancyIcon from './../../assets/img/vacancy-icon.png';
import VacancyIconInactive from './../../assets/img/vacancy-icon-inactive.png';
import { Texture } from "../shared/Texture";
import './Vacancies.scss';

export const Vacancies = () => {
  const vacancies = [
    {
      id: 0,
      status: 1,
      title: 'IT Sales Manager',
      description: 'RedDuck — fast-growing innovative company, that engaged in blockchain development and financial technologies.Now we are looking for ambitious IT Sales Manager, who will help with expanding the client base of our company.',
      publishDate: 'July 20, 2022'
    },
    {
      id: 1,
      status: 0,
      title: 'Senior Product Manager',
      description: 'We’re looking for a Product Manager who has been involved in blockchain, fintech and trading projects in fast-paced working environment. This is a full-time remote position. We are seeking an expert who is passionate about changing the world through technology',
      publishDate: 'March 10, 2022'
    }
  ]

  return (
    <section className="vacancies">
      <div className="vacancies-list">
        {
          vacancies.map((item) => (
            <div key={item.id} className={item.status ? 'vacancies-list-item' : 'vacancies-list-item inactive'}>
              <div className="vacancies-list-item-left">
                <img src={item.status ? VacancyIcon : VacancyIconInactive} alt="Vacancy Icon" />
                <div className="vacancies-list-item-left-date">{item.publishDate}</div>
                <button>{item.status ? 'open' : 'closed'}</button>
              </div>
              <div className="vacancies-list-item-right">
                <div className="vacancies-list-item-right-title">{item.title}</div>
                <div className="vacancies-list-item-right-description">{item.description}</div>
              </div>
            </div>
          ))
        }
      </div>
      <Texture textureStyles={{left: '-650px', top: '400px'}}/>
    </section>
  )
}