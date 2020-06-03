import React from 'react';
import {
  StyledCardDiv,
  StyledP,
  StyledPaddingDiv
} from '../styled-components/common';
import RetryError from '../reused-components/RetryError';

const StagedCommentCard = ({
  updateStagedComment,
  username,
  postCommentErr,
  stagedComment
}) => {
  const handleError = () => {
    updateStagedComment(stagedComment);
  };

  return (
    <StyledCardDiv>
      <StyledPaddingDiv>
        <StyledP secondary>{username}</StyledP>
        <StyledP ancillary italics>
          {postCommentErr ? (
            <RetryError err={postCommentErr} retryFunction={handleError} />
          ) : (
            'Posting...'
          )}
        </StyledP>
        <StyledP primary>{stagedComment}</StyledP>
      </StyledPaddingDiv>
    </StyledCardDiv>
  );
};

export default StagedCommentCard;
