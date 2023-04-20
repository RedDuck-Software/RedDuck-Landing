import React from 'react';

import { ContactsIntro } from '../components/Contacts/ContactsIntro';
import { ContactsLinks } from '../components/Contacts/ContactsLinks';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';

export const Contacts = () => {
  return (
    <>
      <InsidePageTitle title="Contact Us" />
      <ContactsIntro />
      <ContactsLinks />
    </>
  );
};
