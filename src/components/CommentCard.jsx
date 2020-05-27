import React from 'react';
import * as formatDate from '../utils/formatDate';
import Text from './Text';
import Votes from './Votes';

const CommentCard = ({ author, created_at, body, votes }) => {
  const createdDate = formatDate(created_at);

  return (
    <article>
      <Text>{author}</Text>
      <Text>{createdDate}</Text>
      <Text>{body}</Text>
      <Text>
        <Votes votes={votes} />
      </Text>
    </article>
  );
};

export default CommentCard;
