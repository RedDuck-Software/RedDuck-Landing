import React from "react";
import { SectionTitle } from "../shared/SectionTitle";
import Achievements1 from './../../assets/img/achievements-1.png';
import Achievements2 from './../../assets/img/achievements-2.png';
import Achievements3 from './../../assets/img/achievements-3.png';
import Achievements4 from './../../assets/img/achievements-4.png';
import Achievements5 from './../../assets/img/achievements-5.png';
import Achievements6 from './../../assets/img/achievements-6.png';
import Achievements7 from './../../assets/img/launchpads.png';
import Achievements8 from './../../assets/img/defi.png';
import Achievements9 from './../../assets/img/nftGames.png';
import Achievements10 from './../../assets/img/blockchainIndexers.png';
import Achievements11 from './../../assets/img/blockchainTechnology.png';
import Achievements12 from './../../assets/img/bridge.png';
import Achievements13 from './../../assets/img/bridges.png';
import Achievements15 from './../../assets/img/achivement15.svg';
import Achievements14 from './../../assets/img/about-us-4.png';
import RoadmapArrow from './../../assets/img/roadmap-arrow.png';
import { ReactComponent as GradientArrow } from './../../assets/img/icons/gradient-arrow-bottom.svg';
import { ScrollArrow } from "../shared/ScrollArrow";
import './Achievements.scss';
import useMatchBreakpoints from "../../hooks/useMatchBreakpoints";

export const Achievements = () => {
  const {isMobile} = useMatchBreakpoints()
  const achievementsList = [
    {
      id: 0,
      date: '03. 2020',
      title: 'Discovery and gathering of the team',
      imageSrc: Achievements1
    },
    {
      id: 1,
      date: '05. 2020',
      title: 'First project in a field of automated trading',
      imageSrc: Achievements2
    },
    {
      id: 2,
      date: '06. 2020',
      title: 'First Blockchain Project',
      imageSrc: Achievements3
    },
    {
      id: 3,
      date: '09. 2020',
      title: 'Start of the own Machine Learning startup development',
      imageSrc: Achievements4
    },
    {
      id: 4,
      date: '11. 2020',
      title: ['Implemented Zero-knowledge proof for validity of content on media sharing marketplaces. Velas Network Award. ', <a href="https://blockchainua-hackathon.com/bh008"> blockchainua-hackathon.com</a>],
      imageSrc: Achievements1
    },
    {
      id: 5,
      date: '12. 2020',
      title: 'Placing at All-Ukrainian Blockchain Hackathon',
      imageSrc: Achievements5
    },
    {
      id: 6,
      date: '01. 2021',
      title: 'Raising investments, company re-branding, and expanding the team',
      imageSrc: Achievements6
    },
    {
      id: 7,
      date: '03. 2021',
      title: 'Development of our own blockchain indexer',
      imageSrc: Achievements10
    },
    {
      id: 8,
      date: '06. 2021',
      title: ['Our first development of PlayToEarn game: ', <a href="https://www.crimecash.biz/">crimecash.biz</a>],
      imageSrc: Achievements9
    },
    {
      id: 9,
      date: '08. 2021:',
      title: ['Our first development af a DevTool for blockchain developers - ', <a href="https://github.com/RedDuck-Software/SolidityProvider">github.com</a>],
      imageSrc: Achievements3
    },
    {
      id: 10,
      date: '10. 2021',
      title: 'Development contract with a Top-10 DeFi product',
      imageSrc: Achievements8
    },
    {
      id: 11,
      date: '11. 2021',
      title: 'Participation in BlockchainUA conference',
      imageSrc: Achievements11
    },
    {
      id: 12,
      date: '02. 2022',
      title: ['Started our volunteering initiative in Ukraine - ', <a href="https://buggydao.redduck.io/">buggydao.redduck.io</a>],
      imageSrc: Achievements12
    },
    {
      id: 13,
      date: '05. 2022',
      title: 'Produced and sent our first buggy for the ukrainian army',
      imageSrc: Achievements13
    },
    {
      id: 14,
      date: '07. 2022',
      title: ['Started development of our own launchpad - ', <a href="https://launchpad.redduck.io/">launchpad.redduck.io</a>],
      imageSrc: Achievements7
    },
    {
      id: 15,
      date: '09. 2022',
      title: ['RedDuck took second place in the Kyiv Tech Summit, a WEB3 hackathon ', <a href="https://www.kyivtechsummit.com">kyivtechsummit.com</a>],
      imageSrc: Achievements14
    },
    {
      id: 16,
      date: '11. 2022',
      title: ['Received a prize, and the opportunity to develop their project on the blockchain NEAR. ', <a href="https://metabuild.devpost.com/">metabuild.devpost.com/</a>],
      imageSrc: Achievements15
    },
  ]
  return (
    <section className="achievements">
      <SectionTitle>Achievements</SectionTitle>
      <div className="achievements-list desktop">
        {
          achievementsList.map((item) => (
            <div key={item.id} className="achievements-list-item">
              <div className="achievements-list-item-left">
                <div className="achievements-list-item-left-id">{item.id + 1}</div>
                <div className="achievements-list-item-left-date">{item.date}</div>
              </div>
              <div className="arrows">
                <img loading="lazy" src={RoadmapArrow} alt="Arrow" className="achievements-list-item-roadmap" />
                <GradientArrow className="achievements-list-item-arrow" />
              </div>
              <div className="achievements-list-item-right">
                <img loading="lazy" src={item.imageSrc} alt="Achievement" />
                <p>{item.title}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="achievements-list mobile">
        {
          achievementsList.map((item) => (
            <div key={item.id} className="achievements-list-item">
              <div className="achievements-list-item-left">
                <div className="achievements-list-item-left-id">{item.id + 1}</div>
                <div className="achievements-list-item-left-date">{item.date}</div>
              </div>
              <div className="arrows">
                <img loading="lazy" src={RoadmapArrow} alt="Arrow" className="achievements-list-item-roadmap" />
                <GradientArrow className="achievements-list-item-arrow" />
              </div>
              <div className="achievements-list-item-right">
                <img loading="lazy" src={item.imageSrc} alt="Achievement" />
                <p>{item.title}</p>
              </div>
            </div>
          ))
        }
      </div>
      <ScrollArrow />
      <SectionTitle>{isMobile ? "We Provide" : "Services We Provide"}</SectionTitle>
    </section>
  )
}
