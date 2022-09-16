import React from 'react';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';
import { RDLogoWithHands } from '../components/shared/RDLogoWithHands';
import { JoinTeam } from '../components/Career/JoinTeam';
import { Vacancies } from '../components/Career/Vacancies';

export const Career = () => {
  return (
    <>
      <InsidePageTitle title="We are hiring"/>
      <RDLogoWithHands />
      <JoinTeam />
      <Vacancies />
    </>
  )
}