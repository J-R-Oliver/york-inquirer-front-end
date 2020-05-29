/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import TopicList from './components/TopicList';
import Article from './components/Article';
import CustomError from './components/CustomError';

class App extends Component {
  state = {
    username: 'weegembump'
  };

  render() {
    const { username } = this.state;

    return (
      <>
        <Header />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/:topic_slug" />
          <TopicList path="/explore" />
          <Article path="/read/:article_id" username={username} />
          <CustomError default />
        </Router>
      </>
    );
  }
}

export default App;
