import React from 'react';
import { Link } from '@reach/router';
import {
  StyledFlexDiv,
  StyledH2,
  StyledImg,
  StyledP
} from '../styled-components/common';

const Error = ({ err }) => {
  return (
    <StyledFlexDiv justify="center" align="stretch" wrap>
      <article>
        <StyledH2 center>
          {err === 'Request failed with status code 400'
            ? 'Oh No! 400 - Bad Request!'
            : 'Oh No! 404 - Page not found!'}
        </StyledH2>
        <Link to="/">
          <StyledP secondary center>
            Click here to check out some of our other context
          </StyledP>
        </Link>
        <StyledImg
          src="/images/goose.png"
          alt="outline of a goose"
          padding="36px"
        />
      </article>
    </StyledFlexDiv>
  );
};

export default Error;
