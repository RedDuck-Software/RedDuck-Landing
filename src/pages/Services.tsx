import React from 'react';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';
import { ServicesList } from '../components/Services/ServicesList';
import { ServicesDescription } from '../components/Services/ServicesDescription';

export const Services = () => {
  return (
    <>
      <InsidePageTitle title="Services we provide"/>
      <ServicesList />
      <ServicesDescription />
    </>
  )
}