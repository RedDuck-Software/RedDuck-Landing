import React from 'react';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';
import { EducationIntro } from '../components/Education/EducationIntro';
import { Programs } from '../components/Education/Programs';

export const Education = () => {
  return (
    <>
      <InsidePageTitle title="We teach"/>
      <EducationIntro />
      <Programs />
    </>
  )
}