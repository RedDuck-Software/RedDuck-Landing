import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';
import { MainArticle } from '../components/Blog/MainArticle';
import { ArticlesList } from '../components/Blog/ArticlesList';

export const Blog = () => {
  const [articles, setArticles] = useState<any>([])
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get('https://v1.nocodeapi.com/ushida/medium/jcMcjHMXeuvDXISy');
      setArticles(response);
    };
    getArticles();
  }, [])
  

  return (
    <>
      <InsidePageTitle title="Blog"/>
      {( articles.length !== 0 ?
        <>
          <MainArticle article={articles.data[0]}/>
          <ArticlesList articles={articles}/>
        </>
        :
        <></>
      )}
    </>
  )
}