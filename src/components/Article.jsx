import React, { Component } from 'react';
import { Link } from '@reach/router';
import { getArticle } from '../utils/api';
import * as formatDate from '../utils/formatDate';
import Loading from './Loading';
import CustomError from './CustomError';
import RetryError from './RetryError';
import Title from './Title';
import Text from './Text';
import Votes from './Votes';
import CommentList from './CommentList';

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
        <article>
          <Title>{title}</Title>
          <Text>{author}</Text>
          <Text>{createdDate}</Text>
          <Link to={`/${topic}`}>
            <Text>{`#${topic}`}</Text>
          </Link>
          <Text>{body}</Text>
          <Votes votes={votes} path="articles" objectId={article_id} />
        </article>
        <CommentList article_id={article_id} username={username} />
      </main>
    );
  }
}

export default Article;
