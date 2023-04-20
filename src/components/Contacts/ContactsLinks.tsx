import React from 'react';

import ClutchLogoGradient from './../../assets/img/clutch-logo-gradient.png';
import ClutchLogo from './../../assets/img/clutch-logo.png';
import DouLogoGradient from './../../assets/img/dou-logo-gradient.png';
import DouLogo from './../../assets/img/dou-logo.png';
import EmailLogoGradient from './../../assets/img/e-mail-logo-gradient.png';
import EmailLogo from './../../assets/img/e-mail-logo.png';
import FacebookLogoGradient from './../../assets/img/facebook-logo-gradient.png';
import FacebookLogo from './../../assets/img/facebook-logo.png';
import LinkedinLogoGradient from './../../assets/img/linkedin-logo-gradient.png';
import LinkedinLogo from './../../assets/img/linkedin-logo.png';
import MediumLogoGradient from './../../assets/img/medium-logo-gradient.png';
import MediumLogo from './../../assets/img/medium-logo.png';
import TwitterLogoGradient from './../../assets/img/twitter-logo-gradient.png';
import TwitterLogo from './../../assets/img/twitter-logo.png';
import UpworkLogoGradient from './../../assets/img/upwork-logo-gradient.png';
import UpworkLogo from './../../assets/img/upwork-logo.png';

import { Texture } from '../shared/Texture';
import './ContactsLinks.scss';
import useMatchBreakpoints from '../../hooks/useMatchBreakpoints';

export const ContactsLinks = () => {
  const { isMobile } = useMatchBreakpoints();
  const contactsList = [
    {
      id: 0,
      imageSrc: ClutchLogoGradient,
      imageSrcHover: ClutchLogo,
      link: 'https://clutch.co/profile/redduck',
    },
    {
      id: 1,
      imageSrc: DouLogoGradient,
      imageSrcHover: DouLogo,
      link: 'https://jobs.dou.ua/companies/red-duck/',
    },
    {
      id: 2,
      imageSrc: MediumLogoGradient,
      imageSrcHover: MediumLogo,
      link: 'https://medium.com/@redduck',
    },
    {
      id: 3,
      imageSrc: LinkedinLogoGradient,
      imageSrcHover: LinkedinLogo,
      link: 'https://www.linkedin.com/company/redduckdev/',
    },
    {
      id: 4,
      imageSrc: UpworkLogoGradient,
      imageSrcHover: UpworkLogo,
      link: 'https://www.upwork.com/ag/redduck/',
    },
    {
      id: 5,
      imageSrc: FacebookLogoGradient,
      imageSrcHover: FacebookLogo,
      link: 'https://www.facebook.com/profile.php?id=100076952286530',
    },
    {
      id: 6,
      imageSrc: TwitterLogoGradient,
      imageSrcHover: TwitterLogo,
      link: 'https://twitter.com/redduckdev?s=21&t=_Z9gGbcRoQ7YB7lR0pwKHA',
    },
    {
      id: 7,
      imageSrc: EmailLogoGradient,
      imageSrcHover: EmailLogo,
      link: 'mailto:contact@redduck.io',
    },
  ];

  return (
    <section className="contacts-links">
      <div className="contacts-links-list">
        {contactsList.map((item) => (
          <>
            {item.id === 3 && !isMobile ? <hr className="row" /> : ''}
            <a
              href={item.link}
              key={item.id}
              className="contacts-links-list-item"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contacts-links-list-item-wrapper">
                <img loading="lazy" src={item.imageSrc} alt="Social link" />
                <img
                  loading="lazy"
                  src={item.imageSrcHover}
                  alt="Social link"
                />
              </div>
            </a>
            {item.id === 4 && !isMobile ? <hr className="row" /> : ''}
          </>
        ))}
      </div>
      <Texture
        textureStyles={{ left: '-70%', top: '-50%', transform: 'scale(0.7)' }}
      />
    </section>
  );
};
