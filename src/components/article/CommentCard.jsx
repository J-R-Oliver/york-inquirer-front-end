import React, { Component } from 'react';
import * as formatDate from '../../utils/formatDate';
import {
  StyledButton,
  StyledCardDiv,
  StyledFlexDiv,
  StyledFlexGreyDiv,
  StyledP,
  StyledPaddingDiv
} from '../styled-components/common';
import Votes from '../reused-components/Votes';
import ConfirmDialogue from './ConfirmDialogue';
import RetryError from '../reused-components/RetryError';

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
      <StyledCardDiv>
        <StyledPaddingDiv>
          <StyledFlexDiv>
            <StyledP secondary>{author}</StyledP>
            <StyledP ancillary>{createdDate}</StyledP>
          </StyledFlexDiv>
          <StyledP primary>{body}</StyledP>
        </StyledPaddingDiv>
        <StyledFlexGreyDiv>
          <Votes votes={votes} path="comments" objectId={comment_id} />
          {author === username && !deleteCommentError && (
            <StyledButton type="button" onClick={handleClick}>
              Delete
            </StyledButton>
          )}
          {showConfirmDialogue && (
            <ConfirmDialogue
              updateShowConfirmDialogue={updateShowConfirmDialogue}
            />
          )}
          {deleteCommentError && (
            <RetryError err={deleteCommentError} retryFunction={handleError} />
          )}
        </StyledFlexGreyDiv>
      </StyledCardDiv>
    );
  }
}

export default CommentCard;
