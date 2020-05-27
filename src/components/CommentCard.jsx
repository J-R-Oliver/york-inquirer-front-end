import React from 'react';
import * as formatDate from '../utils/formatDate';
import Text from './Text';
import Votes from './Votes';

const CommentCard = ({ author, created_at, body, votes, comment_id }) => {
  const createdDate = formatDate(created_at);

  return (
    <article>
      <Text>{author}</Text>
      <Text>{createdDate}</Text>
      <Text>{body}</Text>
      <Text>
        <Votes votes={votes} endpoint="comments" id={comment_id} />
      </Text>
    </article>
  );
};

export default CommentCard;
