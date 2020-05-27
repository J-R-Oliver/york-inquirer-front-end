import React from 'react';
import { Link } from '@reach/router';
import Title from './Title';
import Text from './Text';

const TopicCard = ({ slug, description }) => {
  return (
    <article>
      <Link to={`/${slug}`}>
        <Title>{`#${slug}`}</Title>
      </Link>
      <Text>{description}</Text>
    </article>
  );
};

export default TopicCard;
