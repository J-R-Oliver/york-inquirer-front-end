/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import TopicList from './components/TopicList';
import Article from './components/Article';

function App() {
  return (
    <>
      <Header />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/:topic_slug" />
        <TopicList path="/explore" />
        <Article path="/:topic_slug/:article_id" />
      </Router>
    </>
  );
}

export default App;
