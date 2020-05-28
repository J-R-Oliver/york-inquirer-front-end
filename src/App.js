/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import TopicList from './components/TopicList';
import Article from './components/Article';

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
          <Article path="/:topic_slug/:article_id" username={username} />
        </Router>
      </>
    );
  }
}

export default App;
