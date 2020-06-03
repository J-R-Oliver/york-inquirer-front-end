import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import * as formatDate from '../../utils/formatDate';
import {
  StyledArticle,
  StyledFlexGreyDiv,
  StyledH2,
  StyledP,
  StyledPaddingDiv
} from '../styled-components/common';
import Votes from '../reused-components/Votes';
import Comments from '../article/Comments';

const StyledFlexArticle = styled(StyledArticle)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ArticleCard = ({
  author,
  created_at,
  title,
  votes,
  comment_count,
  topic,
  article_id,
  colour
}) => {
  const createdDate = formatDate(created_at);

  return (
    <StyledFlexArticle>
      <StyledPaddingDiv>
        <StyledP secondary>{author}</StyledP>
        <StyledP ancillary>{createdDate}</StyledP>
        <Link to={`/read/${article_id}`}>
          <StyledH2 primary>{title}</StyledH2>
        </Link>
      </StyledPaddingDiv>
      <StyledFlexGreyDiv>
        <Votes votes={votes} path="articles" objectId={article_id} />
        <StyledP secondary>
          <Comments comment_count={comment_count} />
        </StyledP>
        <Link to={`/${topic}`}>
          <StyledP ancillary italic>{`#${topic}`}</StyledP>
        </Link>
      </StyledFlexGreyDiv>
    </StyledFlexArticle>
  );
};

export default ArticleCard;
