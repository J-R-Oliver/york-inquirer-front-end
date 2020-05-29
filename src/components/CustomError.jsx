import React from 'react';
import { Link } from '@reach/router';
import Text from './Text';
import Title from './Title';

const Error = ({ err }) => {
  return (
    <main>
      <article>
        <Title>
          {err === 'Request failed with status code 400'
            ? 'Oh No! 400 - Bad Request!'
            : 'Oh No! 404 - Page not found!'}
        </Title>
        <Link to="/">
          <Text>Why not check out some of our other context</Text>
        </Link>
        <img src="/images/goose.png" alt="outline of a goose" />
      </article>
    </main>
  );
};

export default Error;
