import React, { Component } from 'react';
import { Link } from '@reach/router';
import {
  getArticle,
  getComments,
  postComment,
  deleteComment
} from '../utils/api';
import * as formatDate from '../utils/formatDate';
import Loading from './Loading';
import Title from './Title';
import Text from './Text';
import Votes from './Votes';
import NewComment from './NewComment';
import StagedCommentCard from './StagedCommentCard';
import CommentCard from './CommentCard';

class Article extends Component {
  state = {
    article: {},
    comments: [],
    stagedComment: null,
    postCommentErr: false,
    deleteCommentId: null,
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticle();
    this.fetchComments();
  }

  fetchArticle = () => {
    const { article_id } = this.props;

    getArticle(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };

  fetchComments = () => {
    const { article_id } = this.props;

    getComments(article_id).then(comments => {
      this.setState({ comments });
    });
  };

  updateStagedComment = stagedComment => {
    const { article_id, username } = this.props;

    this.setState({ stagedComment });

    postComment(article_id, username, stagedComment)
      .then(comment => {
        this.setState(({ comments }) => {
          return {
            comments: [comment, ...comments],
            stagedComment: null,
            postCommentErr: false
          };
        });
      })
      .catch(() => {
        this.setState({ postCommentErr: true });
      });
  };

  updateDeleteCommentId = deleteCommentId => {
    this.setState({ deleteCommentId });

    deleteComment(deleteCommentId);
  };

  render() {
    const {
      article: { title, author, created_at, topic, body, votes, article_id },
      comments,
      stagedComment,
      postCommentErr,
      deleteCommentId,
      isLoading
    } = this.state;
    const { username } = this.props;
    const { updateStagedComment, updateDeleteCommentId } = this;

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
        <NewComment updateStagedComment={updateStagedComment} />
        {stagedComment && (
          <StagedCommentCard
            stagedComment={stagedComment}
            postCommentErr={postCommentErr}
            username={username}
            updateStagedComment={updateStagedComment}
          />
        )}
        {comments.map(({ comment_id, ...comment }) => {
          return deleteCommentId !== comment_id ? (
            <CommentCard
              key={comment_id}
              comment_id={comment_id}
              username={username}
              {...comment}
              updateDeleteCommentId={updateDeleteCommentId}
            />
          ) : null;
        })}
      </main>
    );
  }
}

export default Article;
