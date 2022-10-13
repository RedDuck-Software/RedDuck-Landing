import React, { useEffect } from "react";
import { SectionTitle } from "../shared/SectionTitle";
import "./Technologies.scss";
import { Texture } from "../shared/Texture";
import FrontendImg from './../../assets/img/frontend.png';
import BackendImg from './../../assets/img/backend.png';
import DatabaseImg from './../../assets/img/database.png';
import blockchainImg from './../../assets/img/blockchainTechnology.png';
import DeploymentImg from './../../assets/img/deployment.png';
import ManagementImg from './../../assets/img/management.png';
import TypeScriptImg from './../../assets/img/typescript.png';
import ReactImg from './../../assets/img/react.png';
import VueImg from './../../assets/img/vue.png';
import HtmlImg from './../../assets/img/html.png';
import CssImg from './../../assets/img/css.png';
import BlazorImg from './../../assets/img/blazor.png';
import SassImg from './../../assets/img/sass.png';
import ScssImg from './../../assets/img/scss.png';
import AngularImg from './../../assets/img/angular.png';
import AspCoreImg from './../../assets/img/aspCore.png';
import NodeImg from './../../assets/img/js.png';
import CSharpImg from './../../assets/img/cSharp.png';
import FSharpImg from './../../assets/img/fSharp.png';
import DotNetImg from './../../assets/img/dotNet.png';
import AkkaImg from './../../assets/img/akka.png';
import MysqlImg from './../../assets/img/mysql.png';
import MssqlImg from './../../assets/img/mssql.png';
import PostgresImg from './../../assets/img/postgres.png';
import MongoImg from './../../assets/img/mongo.png';
import SolidityImg from './../../assets/img/solidity.png';
import HardhatImg from './../../assets/img/hardhat.png';
import EthersImg from './../../assets/img/ethers.png';
import ZeppelinImg from './../../assets/img/zeppelin.png';
import AlchemyImg from './../../assets/img/alchemy.png';
import AzureImg from './../../assets/img/azure.png';
import AwsImg from './../../assets/img/aws.png';
import DockerImg from './../../assets/img/docker.png';
import GhRepoImg from './../../assets/img/ghRepo.png';
import GhProjectImg from './../../assets/img/ghProject.png';

export const Technologies = () => {
  const TechnologiesCards = [
    {
      id: 1,
      title: 'Frontend',
      imageSrc: FrontendImg,
      technologies: [
        {
          id: 1,
          title: 'TypeScript',
          imageSrc: TypeScriptImg
        },
        {
          id: 2,
          title: 'React',
          imageSrc: ReactImg
        },
        {
          id: 3,
          title: 'Vue.js',
          imageSrc: VueImg
        },
        {
          id: 4,
          title: 'HTML',
          imageSrc: HtmlImg
        },
        {
          id: 5,
          title: 'CSS',
          imageSrc: CssImg
        },
        {
          id: 6,
          title: 'Blazor',
          imageSrc: BlazorImg
        },
        {
          id: 7,
          title: 'SASS',
          imageSrc: SassImg
        },
        {
          id: 8,
          title: 'Flex adaptive',
          imageSrc: CssImg
        },
        {
          id: 9,
          title: 'SCSS',
          imageSrc: ScssImg
        },
        {
          id: 10,
          title: 'Angular',
          imageSrc: AngularImg
        },
      ]
    },
    {
      id: 2,
      title: 'Backend',
      imageSrc: BackendImg,
      technologies: [
        {
          id: 1,
          title: 'ASP.NET Core',
          imageSrc: AspCoreImg
        },
        {
          id: 2,
          title: 'Node.js',
          imageSrc: NodeImg
        },
        {
          id: 3,
          title: 'C#',
          imageSrc: CSharpImg
        },
        {
          id: 4,
          title: 'Entity Framework Core',
          imageSrc: DotNetImg
        },
        {
          id: 5,
          title: 'F#',
          imageSrc: FSharpImg
        },
        {
          id: 6,
          title: 'Akka.NET',
          imageSrc: AkkaImg
        },
      ]
    },
    {
      id: 3,
      title: 'Database',
      imageSrc: DatabaseImg,
      technologies: [
        {
          id: 1,
          title: 'MySQL',
          imageSrc: MysqlImg
        },
        {
          id: 2,
          title: 'MSSQL Server',
          imageSrc: MssqlImg
        },
        {
          id: 3,
          title: 'PostgreSQL',
          imageSrc: PostgresImg
        },
        {
          id: 4,
          title: 'MongoDB',
          imageSrc: MongoImg
        }
      ]
    },
    {
      id: 4,
      title: 'Blockchain',
      imageSrc: blockchainImg,
      technologies: [
        {
          id: 1,
          title: 'Solidity',
          imageSrc: SolidityImg
        },
        {
          id: 2,
          title: 'Hardhat',
          imageSrc: HardhatImg
        },
        {
          id: 3,
          title: 'Ethers.js',
          imageSrc: EthersImg
        },
        {
          id: 4,
          title: 'OpenZeppelin',
          imageSrc: ZeppelinImg
        },
        {
          id: 5,
          title: 'Alchemy',
          imageSrc: AlchemyImg
        }
      ]
    },
    {
      id: 5,
      title: 'Deployment',
      imageSrc: DeploymentImg,
      technologies: [
        {
          id: 1,
          title: 'Azure',
          imageSrc: AzureImg
        },
        {
          id: 2,
          title: 'AWS',
          imageSrc: AwsImg
        },
        {
          id: 3,
          title: 'Docker',
          imageSrc: DockerImg
        }
      ]
    },
    {
      id: 6,
      title: 'Repository and Management',
      imageSrc: ManagementImg,
      technologies: [
        {
          id: 1,
          title: 'Github Repositories',
          imageSrc: GhRepoImg
        },
        {
          id: 2,
          title: 'Github Projects',
          imageSrc: GhProjectImg
        }
      ]
    }
  ]
  let cardsList:any
  useEffect(() => {
    cardsList = document.querySelectorAll('.technologies-cards-item')
  }, [])

  const toggleCard = (id: number) => {
    console.log(cardsList)
    cardsList[id].classList.toggle('active')
  }

  return (
    <section className="technologies">
      <SectionTitle>Technologies</SectionTitle>
      <div className="technologies-cards">
        {
          TechnologiesCards.map((item, index) => (
            ((index + 1) % 3 === 0 ?
            <>
              <hr key={item.id / 1000000}/>
              <div key={item.id} className="technologies-cards-item" id="header">
                <div className="technologies-cards-item-wrapper">
                  <div
                    onClick={() => {toggleCard(index)}}
                    className="technologies-cards-item-open-button"
                  >
                    <div className="rectangle"></div>
                    <div className="rectangle"></div>
                  </div>
                  <div
                    onClick={() => {toggleCard(index)}}
                    className="technologies-cards-item-close-button"
                  ></div>
                  <div className="technologies-cards-item-number">{item.id}</div>
                  <div className="technologies-cards-item-title">
                    <img src={item.imageSrc} alt={item.title} />
                    <p>{item.title}</p>
                  </div>
                  <div className="technologies-cards-item-technologies-list">
                    {
                      item.technologies?.map((technology) => (
                        <div key={technology.id} className="technologies-cards-item-technologies-list-item">
                          <img src={technology.imageSrc} alt={technology.title} />
                          <p>{technology.title}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              <hr key={item.id / 1000}/>
            </>
            :
            <div key={item.id} className="technologies-cards-item" id="header">
              <div className="technologies-cards-item-wrapper">
                <div
                  onClick={() => {toggleCard(index)}}
                  className="technologies-cards-item-open-button"
                >
                  <div className="rectangle"></div>
                  <div className="rectangle"></div>
                </div>
                <div
                  onClick={() => {toggleCard(index)}}
                  className="technologies-cards-item-close-button"
                ></div>
                <div className="technologies-cards-item-number">{item.id}</div>
                <div className="technologies-cards-item-title">
                  <img src={item.imageSrc} alt={item.title} />
                  <p>{item.title}</p>
                </div>
                <div className="technologies-cards-item-technologies-list">
                  {
                    item.technologies?.map((technology) => (
                      <div key={technology.id} className="technologies-cards-item-technologies-list-item">
                        <img src={technology.imageSrc} alt={technology.title} />
                        <p>{technology.title}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          )))
        }
      </div>
      <Texture className="texture" textureStyles={{left: '50%', top: '20%', transform: 'translateX(-50%) scale(0.8)'}}/>
    </section>
  )
}