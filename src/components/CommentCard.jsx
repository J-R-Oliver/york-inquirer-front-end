import React, { Component } from 'react';
import * as formatDate from '../utils/formatDate';
import Text from './Text';
import Votes from './Votes';
import Button from './Button';
import ConfirmDialogue from './ConfirmDialogue';
import RetryError from './RetryError';

class CommentCard extends Component {
  state = {
    showConfirmDialogue: false
  };

  handleClick = () => {
    this.setState({ showConfirmDialogue: true });
  };

  updateShowConfirmDialogue = confirmed => {
    const { updateDeleteCommentId, comment_id } = this.props;

    if (confirmed) {
      updateDeleteCommentId(comment_id);
    }

    this.setState({ showConfirmDialogue: false });
  };

  handleError = () => {
    const { updateDeleteCommentId, comment_id } = this.props;

    updateDeleteCommentId(comment_id);
  };

  render() {
    const { showConfirmDialogue } = this.state;
    const {
      author,
      created_at,
      body,
      votes,
      comment_id,
      username,
      deleteCommentError
    } = this.props;
    const { handleClick, updateShowConfirmDialogue, handleError } = this;

    const createdDate = formatDate(created_at);

    return (
      <article>
        <Text>{author}</Text>
        <Text>{createdDate}</Text>
        <Text>{body}</Text>
        <Votes votes={votes} path="comments" objectId={comment_id} />
        {author === username && !deleteCommentError && (
          <Button type="button" onClick={handleClick}>
            Delete
          </Button>
        )}
        {showConfirmDialogue && (
          <ConfirmDialogue
            updateShowConfirmDialogue={updateShowConfirmDialogue}
          />
        )}
        {deleteCommentError && (
          <RetryError err={deleteCommentError} retryFunction={handleError} />
        )}
      </article>
    );
  }
}

export default CommentCard;
