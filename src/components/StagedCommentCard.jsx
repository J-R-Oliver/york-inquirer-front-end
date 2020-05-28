import React from 'react';
import Text from './Text';
import Button from './Button';

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
          <Button type="button" onClick={handleClick}>
            Error posting Comment! Tap here to retry
          </Button>
        ) : (
          'Posting...'
        )}
      </Text>
      <Text>{stagedComment}</Text>
    </article>
  );
};

export default StagedCommentCard;
