import React from 'react';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';
import { Domain } from '../components/Expertise/Domain';
import { Technologies } from '../components/Expertise/Technologies';

export const Expertise = () => {
  return (
    <>
      <InsidePageTitle title="Our expertise"/>
      <Domain />
      <Technologies />
    </>
  )
}