import React from 'react';

import { JoinTeam } from '../components/Career/JoinTeam';
import { Vacancies } from '../components/Career/Vacancies';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';
import { RDLogoWithHands } from '../components/shared/RDLogoWithHands';

export const Career = () => {
  return (
    <>
      <InsidePageTitle title="We are hiring" />
      <RDLogoWithHands />
      <JoinTeam />
      <Vacancies />
    </>
  );
};
