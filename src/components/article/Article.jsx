import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { getArticle } from '../../utils/api';
import * as formatDate from '../../utils/formatDate';
import Loading from '../reused-components/Loading';
import CustomError from '../reused-components/CustomError';
import RetryError from '../reused-components/RetryError';
import {
  StyledFlexDiv,
  StyledFlexGreyDiv,
  StyledH2,
  StyledP,
  StyledPaddingDiv
} from '../styled-components/common';
import Votes from '../reused-components/Votes';
import CommentList from './CommentList';

const StyledArticle = styled.article`
  margin-top: 18px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    err: ''
  };

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    const { article_id } = this.props;

    getArticle(article_id)
      .then(article => {
        this.setState({ article, isLoading: false, err: '' });
      })
      .catch(({ message }) => {
        this.setState({ isLoading: false, err: message });
      });
  };

  render() {
    const {
      article: { title, author, created_at, topic, body, votes, article_id },
      isLoading,
      err
    } = this.state;
    const { username } = this.props;
    const { fetchArticle } = this;

    const createdDate = formatDate(created_at);

    if (isLoading) return <Loading />;
    if (err !== 'Network Error' && err !== '') {
      return <CustomError err={err} />;
    }
    if (err) return <RetryError err={err} retryFunction={fetchArticle} />;

    return (
      <main>
        <StyledArticle>
          <StyledPaddingDiv>
            <StyledH2>{title}</StyledH2>
            <StyledFlexDiv>
              <StyledP secondary>{author}</StyledP>
              <StyledP ancillary>{createdDate}</StyledP>
            </StyledFlexDiv>
            <Link to={`/${topic}`}>
              <StyledP secondary italics>{`#${topic}`}</StyledP>
            </Link>
            <StyledP primary>{body}</StyledP>
          </StyledPaddingDiv>
          <StyledFlexGreyDiv>
            <Votes votes={votes} path="articles" objectId={article_id} />
          </StyledFlexGreyDiv>
        </StyledArticle>
        <CommentList article_id={article_id} username={username} />
      </main>
    );
  }
}

export default Article;
