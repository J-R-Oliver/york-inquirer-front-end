import React from 'react';
import Title from './Title';
import Text from './Text';

const TopicCard = ({ slug, description }) => {
  return (
    <article>
      <Title>{`#${slug}`}</Title>
      <Text>{description}</Text>
    </article>
  );
};

export default TopicCard;
