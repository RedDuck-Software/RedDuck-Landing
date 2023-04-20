import React from 'react';

import AttentionSecurity from './../assets/img/attentionSecurity.png';
import ExperiencedTeam from './../assets/img/experiencedTeam.png';
import ValueTime from './../assets/img/valueTime.png';

import { ServicesDescription } from '../components/Services/ServicesDescription';
import { ServicesList } from '../components/Services/ServicesList';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';
import useMatchBreakpoints from '../hooks/useMatchBreakpoints';

export const Services = () => {
  const { isMobile } = useMatchBreakpoints();
  const servicesDescription = [
    {
      id: 0,
      title: 'Experienced team',
      description: [
        // eslint-disable-next-line react/jsx-key
        <strong>
          RedDuck team consists of experienced managers and developers,
        </strong>,
        ' the expertise of most of us is confirmed by a MS degree in Computer Science and similar fields and by successful practical experience.',
      ],
      imageSrc: ExperiencedTeam,
    },
    {
      id: 1,
      title: 'We value your time',
      description: [
        // eslint-disable-next-line react/jsx-key
        <strong>We know how to value time,</strong>,
        ' therefore we assemble a special team ready to work within a few days. We can quickly increase or decrease the size according to the needs of the client.',
      ],
      imageSrc: ValueTime,
    },
    {
      id: 2,
      title: 'Attention to security ',
      description: [
        // eslint-disable-next-line react/jsx-key
        <strong>We pay special attention to security</strong>,
        ' and we understand the importance of strict security protocols that we follow at all stages of development.',
      ],
      imageSrc: AttentionSecurity,
    },
  ];
  return (
    <>
      <InsidePageTitle title="Services we provide" />
      <ServicesList />
      <ServicesDescription
        style={{ marginBottom: isMobile ? '192px' : '18.75rem' }}
        servicesDescription={servicesDescription}
      />
    </>
  );
};
