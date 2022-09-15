import React from 'react';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';
import { CasesList } from '../components/Cases/CasesList';

export const Cases = () => {
  return (
    <>
      <InsidePageTitle title="Our cases"/>
      <CasesList />
    </>
  )
}