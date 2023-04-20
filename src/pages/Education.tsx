import React from 'react';

import { EducationIntro } from '../components/Education/EducationIntro';
import { Programs } from '../components/Education/Programs';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';

export const Education = () => {
  return (
    <>
      <InsidePageTitle title="We teach" />
      <EducationIntro />
      <Programs />
    </>
  );
};
