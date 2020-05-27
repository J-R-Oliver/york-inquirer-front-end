import React, { Component } from 'react';
import { Link } from '@reach/router';
import { getArticle, getComments } from '../utils/api';
import * as formatDate from '../utils/formatDate';
import Loading from './Loading';
import Title from './Title';
import Text from './Text';
import Votes from './Votes';
import CommentCard from './CommentCard';

class Article extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticle();
    this.fetchComments();
  }

  fetchArticle() {
    const { article_id } = this.props;

    getArticle(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }

  fetchComments() {
    const { article_id } = this.props;

    getComments(article_id).then(comments => {
      this.setState({ comments });
    });
  }

  render() {
    const {
      article: { title, author, created_at, topic, body, votes },
      comments,
      isLoading
    } = this.state;
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
            <Votes votes={votes} />
          </Text>
        </article>
        {comments.map(({ comment_id, ...comment }) => {
          return <CommentCard key={comment_id} {...comment} />;
        })}
      </main>
    );
  }
}

export default Article;
