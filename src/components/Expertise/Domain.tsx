import React from "react";
import { SectionTitle } from "../shared/SectionTitle";
import "./Domain.scss";
import BlockhainImg from './../../assets/img/blockchain.png';
import CryptoImg from './../../assets/img/crypto.png';
import TradingImg from './../../assets/img/trading.png';
import BankingImg from './../../assets/img/banking.png';
import FinanceImg from './../../assets/img/finance.png';
import FintechImg from './../../assets/img/fintech.png';
import { Texture } from "../shared/Texture";
import { ScrollArrow } from '../../components/shared/ScrollArrow';

export const Domain = () => {
  const domainCards = [
    {
      id: 1,
      title: 'Blockchain',
      imageSrc: BlockhainImg
    },
    {
      id: 2,
      title: 'Crypto',
      imageSrc: CryptoImg
    },
    {
      id: 3,
      title: 'Trading',
      imageSrc: TradingImg
    },
    {
      id: 4,
      title: 'Banking',
      imageSrc: BankingImg
    },
    {
      id: 5,
      title: 'Finance',
      imageSrc: FinanceImg
    },
    {
      id: 6,
      title: 'Fintech',
      imageSrc: FintechImg
    }
  ]


  return (
    <section className="domain">
      <SectionTitle>Domain</SectionTitle>
      <div className="domain-cards">
        {
          domainCards.map((item) => (
            <div key={item.id} className="domain-cards-item">
              <img src={item.imageSrc} alt={item.title} />
              <h5 className="domain-cards-item-title">{item.title}</h5>
            </div>
          ))
        }
      </div>
      <Texture textureStyles={{left: '50%', top: '30%', transform: 'translateX(-50%) scale(0.7)'}}/>
      <ScrollArrow />
    </section>
  )
}