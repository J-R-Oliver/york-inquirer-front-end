/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import TopicList from './components/TopicList';

function App() {
  return (
    <>
      <Header />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/:topic_slug" />
        <TopicList path="/explore" />
      </Router>
    </>
  );
}

export default App;
