import React from "react";
import './CasesList.scss';
import PrivateBlockchains from './../../assets/img/privateBlockchains.png';
import SmartContracts from './../../assets/img/smartContracts.png';
import DeFi from './../../assets/img/defi.png';
import NFT from './../../assets/img/nft.png';
import Dapps from './../../assets/img/dapps.png';
import BlockchainIndexers from './../../assets/img/blockchainIndexers.png';
import WalletDevelopment from './../../assets/img/walletDevelopment.png';
import StakingLaunchpads from './../../assets/img/stakingLaunchpads.png';
import Vesting from './../../assets/img/vesting.png';
import Launchpads from './../../assets/img/launchpads.png';
import Bridge from './../../assets/img/bridge.png';
import IDO from './../../assets/img/ido.png';
import NFTMarketplaces from './../../assets/img/nftMarketplaces.png';
import BlockchainExplorers from './../../assets/img/blockchainExplorers.png';
import NFTGames from './../../assets/img/nftGames.png';
import DeFiBacktesting from './../../assets/img/defiBacktesting.png';
import CEX from './../../assets/img/cex.png';
import DAO from './../../assets/img/dao.png';
import TradingSoftware from './../../assets/img/tradingSoftware.png';
import Bridges from './../../assets/img/bridges.png';
import PaymentSystems from './../../assets/img/paymentSystems.png';
import CryptoExchanges from './../../assets/img/cryptoExchanges.png';
import Marketplaces from './../../assets/img/marketplaces.png';
import Profit from './../../assets/img/profit.png';
import TradingBacktesting from './../../assets/img/tradingBacktesting.png';
import Indicators from './../../assets/img/indicators.png';
import TradingEngines from './../../assets/img/tradingEngines.png';
import CentralizedExchanges from './../../assets/img/centralizedExchanges.png';
import TradingStrategies from './../../assets/img/tradingStrategies.png';
import BankingSoftware from './../../assets/img/bankingSoftware.png';
import { Texture } from "../shared/Texture";

export const CasesList = () => {
  const casesListOne = [
    {
      id: 0,
      title: 'Private blockchains',
      imageSrc: PrivateBlockchains
    },
    {
      id: 1,
      title: 'Smart contracts',
      imageSrc: SmartContracts
    },
    {
      id: 2,
      title: 'DeFi',
      imageSrc: DeFi
    },
    {
      id: 3,
      title: 'NFT',
      imageSrc: NFT
    },
    {
      id: 4,
      title: 'Dapps',
      imageSrc: Dapps
    },
    {
      id: 5,
      title: 'Blockchain indexers',
      imageSrc: BlockchainIndexers
    },
    {
      id: 6,
      title: 'Wallet Development',
      imageSrc: WalletDevelopment
    },
    {
      id: 7,
      title: 'Staking, Launchpads',
      imageSrc: StakingLaunchpads
    },
    {
      id: 8,
      title: 'Vesting',
      imageSrc: Vesting
    },
    {
      id: 9,
      title: 'Launchpads',
      imageSrc: Launchpads
    },
    {
      id: 10,
      title: 'Bridge',
      imageSrc: Bridge
    },
    {
      id: 11,
      title: 'IDO / Pre-sale',
      imageSrc: IDO
    },
    {
      id: 12,
      title: 'NFT marketplaces',
      imageSrc: NFTMarketplaces
    },
    {
      id: 13,
      title: 'Blockchain explorers',
      imageSrc: BlockchainExplorers
    },
    {
      id: 14,
      title: 'NFT games',
      imageSrc: NFTGames
    },
    {
      id: 15,
      title: 'DeFi Backtesting',
      imageSrc: DeFiBacktesting
    },
    {
      id: 16,
      title: 'CEX/DEX',
      imageSrc: CEX
    },
    {
      id: 17,
      title: 'DAO',
      imageSrc: DAO
    },

  ]

  const casesListTwo = [
    {
      id: 0,
      title: 'Trading Software',
      imageSrc: TradingSoftware
    },
    {
      id: 1,
      title: 'Bridges',
      imageSrc: Bridges
    },
    {
      id: 2,
      title: 'Payment Systems',
      imageSrc: PaymentSystems
    },
    {
      id: 3,
      title: 'Crypto Exchanges',
      imageSrc: CryptoExchanges
    },
    {
      id: 4,
      title: 'Marketplaces',
      imageSrc: Marketplaces
    },
    {
      id: 5,
      title: 'Stop Losses and Profit Targets',
      imageSrc: Profit
    },
    {
      id: 6,
      title: 'Trading Backtesting',
      imageSrc: TradingBacktesting
    },
    {
      id: 7,
      title: 'Indicators',
      imageSrc: Indicators
    },
    {
      id: 8,
      title: 'Trading engines',
      imageSrc: TradingEngines
    },
    {
      id: 9,
      title: 'Centralized Exchanges',
      imageSrc: CentralizedExchanges
    },
    {
      id: 10,
      title: 'Trading Strategies',
      imageSrc: TradingStrategies
    },
    {
      id: 11,
      title: 'Banking Software',
      imageSrc: BankingSoftware
    },
  ]
  return (
    <section className="cases">
      <div className="cases-list">
        {
          casesListOne.map((item) => (
            ((item.id + 1) % 3 === 0 ?
            <>
              <div key={item.id} className={item.id % 3 === 0 && item.id % 2 !== 0 ? 'cases-list-item row' : 'cases-list-item'}>
                <div className="cases-list-item-wrapper">
                  <img src={item.imageSrc} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              </div>
              <hr key={item.id / 1000}/>
            </>
            :
            <div key={item.id}  className={item.id % 3 === 0 && item.id % 2 !== 0 ? 'cases-list-item row' : 'cases-list-item'}>
              <div className="cases-list-item-wrapper">
                <img src={item.imageSrc} alt={item.title} />
                <p>{item.title}</p>
              </div>
            </div>
          )))
        }
      </div>
      <div className="cases-list">
        {
          casesListTwo.map((item) => (
            ((item.id + 1) % 3 === 0 ?
            <>
              <div key={item.id} className={item.id % 3 === 0 && item.id % 2 !== 0 ? 'cases-list-item row' : 'cases-list-item'}>
                <div className="cases-list-item-wrapper">
                  <img src={item.imageSrc} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              </div>
              <hr key={item.id / 1000}/>
            </>
            :
            <div key={item.id}  className={item.id % 3 === 0 && item.id % 2 !== 0 ? 'cases-list-item row' : 'cases-list-item'}>
              <div className="cases-list-item-wrapper">
                <img src={item.imageSrc} alt={item.title} />
                <p>{item.title}</p>
              </div>
            </div>
          )))
        }
      </div>
      <Texture textureStyles={{left: '27%', top: '50%'}}/>
    </section>
  )
}