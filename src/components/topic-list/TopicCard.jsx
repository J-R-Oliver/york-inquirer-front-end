import React from 'react';
import { Link } from '@reach/router';
import {
  StyledArticle,
  StyledP,
  StyledPaddingDiv
} from '../styled-components/common';

const TopicCard = ({ slug, description }) => {
  return (
    <StyledArticle>
      <StyledPaddingDiv>
        <Link to={`/${slug}`}>
          <StyledP primary italic noMargin>{`#${slug}`}</StyledP>
        </Link>
        <StyledP secondary>{description}</StyledP>
      </StyledPaddingDiv>
    </StyledArticle>
  );
};

export default TopicCard;
