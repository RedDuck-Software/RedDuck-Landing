import React from 'react';

import './CasesList.scss';
import BankingSoftware from './../../assets/img/bankingSoftware.png';
import BlockchainExplorers from './../../assets/img/blockchainExplorers.png';
import BlockchainIndexers from './../../assets/img/blockchainIndexers.png';
import Bridge from './../../assets/img/bridge.png';
import Bridges from './../../assets/img/bridges.png';
import CentralizedExchanges from './../../assets/img/centralizedExchanges.png';
import CEX from './../../assets/img/cex.png';
import CryptoExchanges from './../../assets/img/cryptoExchanges.png';
import DAO from './../../assets/img/dao.png';
import Dapps from './../../assets/img/dapps.png';
import DeFi from './../../assets/img/defi.png';
import DeFiBacktesting from './../../assets/img/defiBacktesting.png';
import IDO from './../../assets/img/ido.png';
import Indicators from './../../assets/img/indicators.png';
import Launchpads from './../../assets/img/launchpads.png';
import Marketplaces from './../../assets/img/marketplaces.png';
import NFT from './../../assets/img/nft.png';
import NFTGames from './../../assets/img/nftGames.png';
import NFTMarketplaces from './../../assets/img/nftMarketplaces.png';
import PaymentSystems from './../../assets/img/paymentSystems.png';
import PrivateBlockchains from './../../assets/img/privateBlockchains.png';
import Profit from './../../assets/img/profit.png';
import SmartContracts from './../../assets/img/smartContracts.png';
import StakingLaunchpads from './../../assets/img/stakingLaunchpads.png';
import TradingBacktesting from './../../assets/img/tradingBacktesting.png';
import TradingEngines from './../../assets/img/tradingEngines.png';
import TradingSoftware from './../../assets/img/tradingSoftware.png';
import TradingStrategies from './../../assets/img/tradingStrategies.png';
import Vesting from './../../assets/img/vesting.png';
import WalletDevelopment from './../../assets/img/walletDevelopment.png';

import useMatchBreakpoints from '../../hooks/useMatchBreakpoints';
import { Texture } from '../shared/Texture';

export const CasesList = () => {
  const { isTablet, isMobile } = useMatchBreakpoints();
  const casesListOne = [
    {
      id: 0,
      title: 'Private blockchains',
      imageSrc: PrivateBlockchains,
      borders: isTablet || isMobile ? 'rb blb' : 'brb',
    },
    {
      id: 1,
      title: 'Smart contracts',
      imageSrc: SmartContracts,
      borders: isTablet || isMobile ? 'rb lb' : 'blb brb',
    },
    {
      id: 2,
      title: 'DeFi',
      imageSrc: DeFi,
      borders: isTablet || isMobile ? 'rb lb' : 'lb rb',
    },
    {
      id: 3,
      title: 'NFT',
      imageSrc: NFT,
      borders: isTablet || isMobile ? 'rb lb' : 'lb',
    },
    {
      id: 4,
      title: 'Dapps',
      imageSrc: Dapps,
      borders: isTablet || isMobile ? 'rb lb' : 'rb',
    },
    {
      id: 5,
      title: 'Blockchain indexers',
      imageSrc: BlockchainIndexers,
      borders: isTablet || isMobile ? 'rb lb' : 'lb rb',
    },
    {
      id: 6,
      title: 'Wallet Development',
      imageSrc: WalletDevelopment,
      borders: isTablet || isMobile ? 'rb lb' : 'lb rb',
    },
    {
      id: 7,
      title: 'Staking, Launchpads',
      imageSrc: StakingLaunchpads,
      borders: isTablet || isMobile ? 'rb lb' : 'lb',
    },
    {
      id: 8,
      title: 'Vesting',
      imageSrc: Vesting,
      borders: isTablet || isMobile ? 'rb lb' : 'rb',
    },
    {
      id: 9,
      title: 'Launchpads',
      imageSrc: Launchpads,
      borders: isTablet || isMobile ? 'rb lb' : 'rb lb',
    },
    {
      id: 10,
      title: 'Bridge',
      imageSrc: Bridge,
      borders: isTablet || isMobile ? 'rb lb' : 'rb lb',
    },
    {
      id: 11,
      title: 'IDO / Pre-sale',
      imageSrc: IDO,
      borders: isTablet || isMobile ? 'rb lb' : 'lb',
    },
    {
      id: 12,
      title: 'NFT marketplaces',
      imageSrc: NFTMarketplaces,
      borders: isTablet || isMobile ? 'rb lb' : 'rb',
    },
    {
      id: 13,
      title: 'Blockchain explorers',
      imageSrc: BlockchainExplorers,
      borders: isTablet || isMobile ? 'rb lb' : 'rb lb',
    },
    {
      id: 14,
      title: 'NFT games',
      imageSrc: NFTGames,
      borders: isTablet || isMobile ? 'rb lb' : 'rb lb',
    },
    {
      id: 15,
      title: 'DeFi Backtesting',
      imageSrc: DeFiBacktesting,
      borders: isTablet || isMobile ? 'rb lb' : 'lb',
    },
    {
      id: 16,
      title: 'CEX/DEX',
      imageSrc: CEX,
      borders: isTablet || isMobile ? 'rb lb' : 'trb',
    },
    {
      id: 17,
      title: 'DAO',
      imageSrc: DAO,
      borders: isTablet || isMobile ? 'trb lb' : 'trb tlb',
    },
  ];

  const casesListTwo = [
    {
      id: 0,
      title: 'Trading Software',
      imageSrc: TradingSoftware,
      borders: isTablet || isMobile ? 'rb blb' : 'brb',
    },
    {
      id: 1,
      title: 'Bridges',
      imageSrc: Bridges,
      borders: isTablet || isMobile ? 'rb lb' : 'brb blb',
    },
    {
      id: 2,
      title: 'Payment Systems',
      imageSrc: PaymentSystems,
      borders: isTablet || isMobile ? 'rb lb' : 'lb rb',
    },
    {
      id: 3,
      title: 'Crypto Exchanges',
      imageSrc: CryptoExchanges,
      borders: isTablet || isMobile ? 'rb lb' : 'lb',
    },
    {
      id: 4,
      title: 'Marketplaces',
      imageSrc: Marketplaces,
      borders: isTablet || isMobile ? 'rb lb' : 'rb',
    },
    {
      id: 5,
      title: 'Stop Losses and Profit Targets',
      imageSrc: Profit,
      borders: isTablet || isMobile ? 'rb lb' : 'lb rb',
    },
    {
      id: 6,
      title: 'Trading Backtesting',
      imageSrc: TradingBacktesting,
      borders: isTablet || isMobile ? 'rb lb' : 'lb rb',
    },
    {
      id: 7,
      title: 'Indicators',
      imageSrc: Indicators,
      borders: isTablet || isMobile ? 'rb lb' : 'lb',
    },
    {
      id: 8,
      title: 'Trading engines',
      imageSrc: TradingEngines,
      borders: isTablet || isMobile ? 'rb lb' : 'rb',
    },
    {
      id: 9,
      title: 'Centralized Exchanges',
      imageSrc: CentralizedExchanges,
      borders: isTablet || isMobile ? 'rb lb' : 'rb lb',
    },
    {
      id: 10,
      title: 'Trading Strategies',
      imageSrc: TradingStrategies,
      borders: isTablet || isMobile ? 'rb lb' : 'trb tlb',
    },
    {
      id: 11,
      title: 'Banking Software',
      imageSrc: BankingSoftware,
      borders: isTablet || isMobile ? 'trb lb' : 'tlb',
    },
  ];
  return (
    <section className="cases">
      <div className="cases-list">
        {casesListOne.map((item) => (
          <>
            <div key={item.id} className={`cases-list-item ${item.borders}`}>
              <div className="cases-list-item-wrapper">
                <img loading="lazy" src={item.imageSrc} alt={item.title} />
                <p>{item.title}</p>
              </div>
            </div>
            {!isTablet && !isMobile && (item.id + 1) % 4 !== 0 && <div />}
            {!isTablet &&
              !isMobile &&
              (item.id + 1) % 4 !== 0 &&
              (item.id + 1) % 2 === 0 && <div />}
          </>
        ))}
      </div>
      <div className="cases-list">
        {casesListTwo.map((item) => (
          <>
            <div key={item.id} className={`cases-list-item ${item.borders}`}>
              <div className="cases-list-item-wrapper">
                <img loading="lazy" src={item.imageSrc} alt={item.title} />
                <p>{item.title}</p>
              </div>
            </div>
            {!isTablet && !isMobile && (item.id + 1) % 4 !== 0 && <div />}
            {!isTablet &&
              !isMobile &&
              (item.id + 1) % 4 !== 0 &&
              (item.id + 1) % 2 === 0 && <div />}
          </>
        ))}
      </div>
      <Texture
        textureStyles={{
          left: '50%',
          top: '0',
          transform: 'translateX(-50%) scale(0.7)',
        }}
      />
    </section>
  );
};
