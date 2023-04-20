import React from 'react';

import { CasesList } from '../components/Cases/CasesList';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';

export const Cases = () => {
  return (
    <>
      <InsidePageTitle title="Our cases" />
      <CasesList />
    </>
  );
};
