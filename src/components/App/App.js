import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/local';
import technology from '../../data/technology';
import science from '../../data/science';
import health from '../../data/health';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topic: local
    }
  }

  deleteArticle(articleId) {
    console.log('idea id is ', articleId);
  }

  sortArticles = (newTopic) => {
    //console.log('newTopic is : ', newTopic);
    this.setState(( state ) => {
      switch(newTopic) {
        case 'science':
          return {topic: science}
        case 'health':
            return {topic: health}
          case 'technology':
              return {topic: technology}
          case 'entertainment':
              return {topic: entertainment}
          default:
            return state
      }
    });
    // this.setState({ topic: newTopic })
  }

  render () {
    console.log('App state is: ', this.state);
    return (
      <div className="app">
        <h1>What's New?</h1>
        <Menu sortArticles={this.sortArticles} />
        {this.state.topic && <NewsContainer news={this.state.topic} deleteArticle={this.deleteArticle} />}
      </div>
    );
  }
}

export default App;
