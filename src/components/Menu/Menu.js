import React from 'react';
import './Menu.css'

const Menu = ({sortArticles}) => {
console.log('sortArticles is: ', sortArticles);
  return (
    <nav>
      <ul>
      </ul>
      <button type="text" onClick={() => sortArticles('entertainment')}> Entertainment</button>
      <button type="text" onClick={() => sortArticles('health')}> Health</button>
      <button type="text" onClick={() => sortArticles('science')}> Science</button>
      <button type="text" onClick={() => sortArticles('technology')}> Technology</button>
    </nav>
  )
}

export default Menu;