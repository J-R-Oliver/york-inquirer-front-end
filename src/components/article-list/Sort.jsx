import React from 'react';
import styled from 'styled-components';
import {
  StyledButton,
  StyledCardDiv,
  StyledFlexDiv,
  StyledPaddingDiv
} from '../styled-components/common';

const StyledContainer = styled(StyledCardDiv)`
  min-width: 300px;
  max-width: 900px;
  border-bottom: 4px solid rgb(196, 179, 122);
  margin-top: 36px;
`;

const Sort = ({ updateSort }) => {
  const handleClick = ({ target: { id } }) => {
    updateSort(id);
  };

  return (
    <StyledContainer>
      <StyledPaddingDiv>
        <StyledFlexDiv>
          <StyledButton type="button" id="created_at" onClick={handleClick}>
            Latest
          </StyledButton>
          <StyledButton type="button" id="votes" onClick={handleClick}>
            Top Rated
          </StyledButton>
          <StyledButton type="button" id="comment_count" onClick={handleClick}>
            Most Discussed
          </StyledButton>
        </StyledFlexDiv>
      </StyledPaddingDiv>
    </StyledContainer>
  );
};

export default Sort;
