/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import Header from './components/header/Header';
import ArticleList from './components/article-list/ArticleList';
import TopicList from './components/topic-list/TopicList';
import Article from './components/article/Article';
import CustomError from './components/reused-components/CustomError';
import Footer from './components/footer/Footer';

const StyledWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  background-color: rgb(250, 250, 250);
  grid-template-areas: '. . .' '. main .' '. footer .';
  grid-template-columns: minmax(30px, 1fr) minmax(300px, 1008px) minmax(30px, 1fr);
  grid-template-rows: 50px auto 36px;
`;

const StyledMain = styled.main`
  grid-area: main;
`;

class App extends Component {
  state = {
    username: 'weegembump'
  };

  render() {
    const { username } = this.state;

    return (
      <StyledWrapper>
        <Header />
        <StyledMain>
          <Router>
            <ArticleList path="/" />
            <ArticleList path="/:topic_slug" />
            <TopicList path="/explore" />
            <Article path="/read/:article_id" username={username} />
            <CustomError default />
          </Router>
        </StyledMain>
        <Footer />
      </StyledWrapper>
    );
  }
}

export default App;
