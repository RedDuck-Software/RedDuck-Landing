import React from 'react';

import ExperiencedTeam from './../assets/img/services-we-provide-1.png';
import ValueTime from './../assets/img/services-we-provide-2.png';
import AttentionSecurity from './../assets/img/services-we-provide-3.png';

import { AboutIntro } from '../components/About/AboutIntro';
import { Achievements } from '../components/About/Achievements';
import { OurTeam } from '../components/About/OurTeam';
import { ServicesDescription } from '../components/Services/ServicesDescription';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';

export const About = () => {
  const servicesDescription = [
    {
      id: 0,
      title: 'Fill a Resource Gap?',
      description: [
        "We have a strong team of experienced experts, who can easily adapt your business to the market requirements. We fill a resource gap and wouldn't let you miss significant gains.",
      ],
      imageSrc: ExperiencedTeam,
    },
    {
      id: 1,
      title: 'Reduce operating costs',
      // eslint-disable-next-line react/jsx-key
      description: [
        <strong>
          Our experts will evaluate your ideas and underline all the pros and
          cons.
        </strong>,
        ' Working with us, you will launch your product faster and significantly reduce costs. If necessary, we will help change the business model, which will increase your income.',
      ],
      imageSrc: ValueTime,
    },
    {
      id: 2,
      title: 'Perform Digital Adoption and Transformation ',
      description: [
        'We remain at the forefront of modern blockchain, Cloud, Data Science technologies. This allows us to track any changes in our niche and adapt your business to them as quickly as possible. We are interested in providing flawless service and increasing your income',
      ],
      imageSrc: AttentionSecurity,
    },
  ];
  return (
    <>
      <InsidePageTitle title="About us" />
      <AboutIntro />
      <Achievements />
      <ServicesDescription servicesDescription={servicesDescription} />
      <OurTeam />
    </>
  );
};
