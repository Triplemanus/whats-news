import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle'
import './NewsContainer.css'

const NewsContainer = ({news, deleteArticle }) => {
  return (
    news.map(article => {
      return (
      <div className='news-container' >
        <NewsArticle 
          id={article.id}
          key={`${Date.now()}-${article.headline}`}
          image={article.img} 
          headline={article.headline}
          description={article.description}
          url={article.url}
          deleteArticle={deleteArticle}
        />
      </div>
      )
    })
  )
};

export default NewsContainer;