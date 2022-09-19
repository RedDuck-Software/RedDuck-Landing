import React from 'react';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';
import { ContactsIntro } from '../components/Contacts/ContactsIntro';
import { ContactsLinks } from '../components/Contacts/ContactsLinks';

export const Contacts = () => {
  return (
    <>
      <InsidePageTitle title="Contact Us"/>
      <ContactsIntro />
      <ContactsLinks />
    </>
  )
}