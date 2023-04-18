import React from "react";
import ContactsImg from './../../assets/img/contacts.png';
import { ScrollArrow } from "../shared/ScrollArrow";
import './ContactsIntro.scss';

export const ContactsIntro = () => {
  return (
    <section className="contacts-intro">
      <div className="contacts-intro-wrapper">
        <img loading="lazy" src={ContactsImg} alt="Contacts" />
        <a href="mailto:sales@redduck.io">sales@redduck.io</a>
        <p>Write Email</p>
      </div>
      <ScrollArrow />
    </section>
  )
}
