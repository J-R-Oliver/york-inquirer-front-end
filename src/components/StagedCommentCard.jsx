import React from 'react';
import Text from './Text';

const StagedCommentCard = ({
  updateStagedComment,
  username,
  postCommentErr,
  stagedComment
}) => {
  const handleClick = () => {
    updateStagedComment(stagedComment);
  };

  return (
    <article>
      <Text>{username}</Text>
      <Text>
        {postCommentErr ? (
          <button type="button" onClick={handleClick}>
            Error posting Comment! Tap here to retry
          </button>
        ) : (
          'Posting...'
        )}
      </Text>
      <Text>{stagedComment}</Text>
    </article>
  );
};

export default StagedCommentCard;
