import React, { Component } from 'react';
import { getComments, postComment, deleteComment } from '../utils/api';
import RetryError from './RetryError';
import NewComment from './NewComment';
import StagedCommentCard from './StagedCommentCard';
import CommentCard from './CommentCard';

class CommentList extends Component {
  state = {
    comments: [],
    err: '',
    stagedComment: '',
    postCommentErr: '',
    deleteCommentId: null,
    deleteCommentError: ''
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const { article_id } = this.props;

    getComments(article_id)
      .then(comments => {
        this.setState({ comments, err: '' });
      })
      .catch(({ message }) => {
        this.setState({ err: message });
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
            postCommentErr: ''
          };
        });
      })
      .catch(() => {
        this.setState({ postCommentErr: 'Error posting Vote.' });
      });
  };

  updateDeleteCommentId = deleteCommentId => {
    this.setState({ deleteCommentId });

    deleteComment(deleteCommentId)
      .then(() => {
        this.setState({ deleteCommentError: '' });
        this.fetchComments();
      })
      .catch(() => {
        this.setState({ deleteCommentError: 'Error deleting Comment' });
      });
  };

  render() {
    const {
      comments,
      err,
      stagedComment,
      postCommentErr,
      deleteCommentId,
      deleteCommentError
    } = this.state;
    const { username } = this.props;
    const { fetchComments, updateStagedComment, updateDeleteCommentId } = this;

    return (
      <>
        {err && <RetryError err={err} retryFunction={fetchComments} />}
        <NewComment updateStagedComment={updateStagedComment} />
        {stagedComment && (
          <StagedCommentCard
            stagedComment={stagedComment}
            postCommentErr={postCommentErr}
            username={username}
            updateStagedComment={updateStagedComment}
          />
        )}
        {deleteCommentError &&
          comments.map(({ comment_id, ...comment }) => {
            return deleteCommentId === comment_id ? (
              <CommentCard
                key={comment_id}
                comment_id={comment_id}
                username={username}
                deleteCommentError={deleteCommentError}
                {...comment}
                updateDeleteCommentId={updateDeleteCommentId}
              />
            ) : null;
          })}
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
      </>
    );
  }
}

export default CommentList;
