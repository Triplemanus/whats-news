import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ id, image, headline, description, url, deleteArticle}) => {
  // console.log('newsArticle id is: ', id);
  return (
    <div className='card'>
      <img className="image" src={image} alt="Current news article"></img>
      <h2>{headline}</h2>
      <h3>{description}</h3>
      <p>{url} {id} </p>
      <button onClick={() => deleteArticle(id)}>🗑</button>
    </div>
  )
}


export default NewsArticle;