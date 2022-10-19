import React, { useEffect, useState } from "react";
import moment from 'moment';
import { ReactComponent as FacebookIcon } from './../../assets/img/icons/fb-icon.svg';
import { ReactComponent as LinkedinIcon } from './../../assets/img/icons/linkedin-icon.svg';
import { ReactComponent as TwitterIcon } from './../../assets/img/icons/twitter-icon.svg';
import { ReactComponent as ShareIcon } from './../../assets/img/icons/share-icon.svg';
import { Texture } from "../shared/Texture";
import './MainArticle.scss';

export const MainArticle = (props: any) => {
    const [articleImg, setArticleImg] = useState<any>({})
    useEffect (() => {
      const div = document.createElement('div')
      div.innerHTML = props.article.content
      const img = div.querySelector('img')
      setArticleImg(img)
    }, [props.article.content])
    let copyLink = () => {
      let copyTextarea = document.createElement("textarea")
      copyTextarea.textContent = props.article.link
      document.body.appendChild(copyTextarea);
      copyTextarea.select();
      document.execCommand("copy");
      document.body.removeChild(copyTextarea);
    }
  return (
    <a href={props.article.link} rel="noreferrer" target="_blank" className="main-article">
      <div className="main-article-left"> 
        <img loading="lazy" src={articleImg.src} alt="Article"/>
      </div>
      <div className="main-article-right">
      <Texture textureStyles={{left: '-2rem', top: '-12rem', transform: 'scale(0.5)', zIndex: '1', opacity: '0.5'}}/>
        <div className="main-article-right-title">
          {props.article.title}
        </div>
        <div className="main-article-right-desc">
          {`${moment(props.article.publish).format('DD.MM.YYYY')} | ${props.article.author}`}
        </div>
        <div className="main-article-right-share">
          <div className="main-article-right-share-left">
            <span>Share</span>
            <a target="_blank" rel="noreferrer" href={`http://www.facebook.com/share.php?u=${props.article.link}`} onClick={() => {window.open(`http://www.facebook.com/share.php?u=${props.article.link}`, 'newwindow', `width=500,height=800`)}} className="main-article-right-share-left-icon">
              <FacebookIcon />
            </a>
            <a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${props.article.title}Article by @RedduckDev ${props.article.link}`} onClick={() => {window.open(`https://twitter.com/intent/tweet?text=${props.article.title}%C2%A0Article by @RedduckDev ${props.article.link}`, 'newwindow', 'width=500,height=800')}} className="main-article-right-share-left-icon">
              <TwitterIcon />
            </a>
            <a target="_blank" rel="noreferrer" href={`https://www.linkedin.com/cws/share?url=${props.article.link}`} onClick={() => {window.open(`https://www.linkedin.com/cws/share?url=${props.article.link}`, 'newwindow', 'width=500,height=800')}} className="main-article-right-share-left-icon">
              <LinkedinIcon />
            </a>
            <div onClick={copyLink} className="main-article-right-share-left-icon">
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}