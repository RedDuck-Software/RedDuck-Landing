import React from 'react';

import { Domain } from '../components/Expertise/Domain';
import { Technologies } from '../components/Expertise/Technologies';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';

export const Expertise = () => {
  return (
    <>
      <InsidePageTitle title="Our expertise" />
      <Domain />
      <Technologies />
    </>
  );
};
