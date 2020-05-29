import React from 'react';
import Text from './Text';
import RetryError from './RetryError';

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
    <article>
      <Text>{username}</Text>
      <Text>
        {postCommentErr ? (
          <RetryError err={postCommentErr} retryFunction={handleError} />
        ) : (
          'Posting...'
        )}
      </Text>
      <Text>{stagedComment}</Text>
    </article>
  );
};

export default StagedCommentCard;
