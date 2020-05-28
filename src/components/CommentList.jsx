import React, { Component } from 'react';
import { getComments, postComment, deleteComment } from '../utils/api';
import NewComment from './NewComment';
import StagedCommentCard from './StagedCommentCard';
import CommentCard from './CommentCard';

class CommentList extends Component {
  state = {
    comments: [],
    stagedComment: null,
    postCommentErr: false,
    deleteCommentId: null
  };

  componentDidMount() {
    this.fetchComments();
  }

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
    this.fetchComments();
  };

  render() {
    const {
      comments,
      stagedComment,
      postCommentErr,
      deleteCommentId
    } = this.state;
    const { username } = this.props;
    const { updateStagedComment, updateDeleteCommentId } = this;

    return (
      <>
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
      </>
    );
  }
}

export default CommentList;
