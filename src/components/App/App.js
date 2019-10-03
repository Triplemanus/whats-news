import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  deleteArticle(articleId) {
    console.log('idea id is ', articleId);
  }

  render () {
    // console.log('App state is: ', local);
    return (
      <div className="app">
        <h1>What's New?</h1>
        <Menu />
        <NewsContainer news={this.state.local} deleteArticle={this.deleteArticle} />
      </div>
    );
  }
}

export default App;
