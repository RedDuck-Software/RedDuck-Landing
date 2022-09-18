import React from "react";
import ContactsImg from './../../assets/img/contacts.png';
import { ScrollArrow } from "../shared/ScrollArrow";
import './ContactsIntro.scss';

export const ContactsIntro = () => {
  return (
    <section className="contacts-intro">
      <div className="contacts-intro-wrapper">
        <img src={ContactsImg} alt="Contacts" />
        <a href="mailto:contact@redduck.io">contact@redduck.io</a>
        <p>Write Email</p>
      </div>
      <ScrollArrow />
    </section>
  )
}