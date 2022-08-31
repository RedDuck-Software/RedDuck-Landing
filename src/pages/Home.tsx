import React from 'react';
import { Intro } from './../components/Home/Intro';
import { Mission } from './../components/Home/Mission';
import { References } from './../components/Home/References';

export const Home = () => {
  return (
    <>
      <Intro />
      <Mission />
      <References />
    </>
  )
}