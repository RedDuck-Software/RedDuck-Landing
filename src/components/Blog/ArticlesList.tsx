import React from "react";
import moment from 'moment';
import { SectionTitle } from "../shared/SectionTitle";
import './ArticlesList.scss';

export const ArticlesList = (props:any) => {
  const getArticleImage = (article:any) => {
    const div = document.createElement('div')
    div.innerHTML = article.content
    const img = div.querySelector('img')
    return img!.src
  }
  return (
    <>
      <SectionTitle>Other articles</SectionTitle>
      <section className="articles-list">
        {
          props.articles.data.map((article:any) => (
            <a href={article.link} target="_blank" rel="noreferrer" key={article.link} className="articles-list-item">
              <div className="articles-list-item-wrapper">
                <img src={getArticleImage(article)} alt="" />
                <div className="articles-list-item-title">{article.title}</div>
                <div dangerouslySetInnerHTML={{__html: article.content}} className="articles-list-item-description"></div>
                <hr/>
                <div className="articles-list-item-date">
                  {`${moment(article.publish).format('DD.MM.YYYY')} | ${article.author}`}
                </div>
              </div>
            </a>
          ))
        }
      </section>
    </> 
  )
}