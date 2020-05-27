import React from 'react';
import { Link } from '@reach/router';
import * as formatDate from '../utils/formatDate';
import Text from './Text';
import Title from './Title';
import Votes from './Votes';
import Comments from './Comments';

const ArticleCard = ({
  author,
  created_at,
  title,
  votes,
  comment_count,
  topic
}) => {
  const createdDate = formatDate(created_at);

  return (
    <article>
      <Text>{author}</Text>
      <Text>{createdDate}</Text>
      <Title>{title}</Title>
      <Text>
        <Votes votes={votes} />
        <Comments comment_count={comment_count} />
      </Text>
      <Link to={`/${topic}`}>
        <Text>{`#${topic}`}</Text>
      </Link>
    </article>
  );
};

export default ArticleCard;
