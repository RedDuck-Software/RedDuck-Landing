import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Loader from '../assets/img/icons/loadet.svg';
import { ArticlesList } from '../components/Blog/ArticlesList';
import { MainArticle } from '../components/Blog/MainArticle';
import { InsidePageTitle } from '../components/shared/InsidePageTitle';
import useMatchBreakpoints from '../hooks/useMatchBreakpoints';

export const Blog = () => {
  const { isMobile } = useMatchBreakpoints();
  const [articles, setArticles] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const response = await axios.get(
        'https://v1.nocodeapi.com/ushida/medium/jcMcjHMXeuvDXISy',
      );
      setArticles(response);
      setLoading(false);
    };
    getArticles();
  }, []);

  return (
    <>
      <InsidePageTitle title="Blog" />
      {loading && (
        <div
          style={{
            width: '100%',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={Loader} style={{ width: '100px' }} />
        </div>
      )}
      {articles.length !== 0 && !loading ? (
        <>
          {!isMobile && <MainArticle article={articles.data[0]} />}
          <ArticlesList articles={articles} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
