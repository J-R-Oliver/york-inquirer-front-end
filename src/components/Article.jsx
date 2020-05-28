import React, { Component } from 'react';
import { Link } from '@reach/router';
import { getArticle } from '../utils/api';
import * as formatDate from '../utils/formatDate';
import Loading from './Loading';
import Title from './Title';
import Text from './Text';
import Votes from './Votes';
import CommentList from './CommentList';

class Article extends Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    const { article_id } = this.props;

    getArticle(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };

  render() {
    const {
      article: { title, author, created_at, topic, body, votes, article_id },
      isLoading
    } = this.state;
    const { username } = this.props;

    const createdDate = formatDate(created_at);

    if (isLoading) return <Loading />;

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
          <Text>
            <Votes votes={votes} path="articles" objectId={article_id} />
          </Text>
        </article>
        <CommentList article_id={article_id} username={username} />
      </main>
    );
  }
}

export default Article;
