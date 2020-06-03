import React from 'react';
import {
  StyledButton,
  StyledFlexDiv,
  StyledModalBackground,
  StyledModalContent,
  StyledP
} from '../styled-components/common';

const ConfirmDialogue = ({ updateShowConfirmDialogue }) => {
  const handleClick = ({ target: { id } }) => {
    if (id === 'true') updateShowConfirmDialogue(true);
    else updateShowConfirmDialogue(false);
  };

  return (
    <StyledModalBackground>
      <StyledModalContent>
        <StyledP primary center>
          Are you sure?
        </StyledP>
        <StyledFlexDiv justify="space-around">
          <StyledButton type="button" id="true" onClick={handleClick}>
            OK
          </StyledButton>
          <StyledButton type="button" id="false" onClick={handleClick}>
            Cancel
          </StyledButton>
        </StyledFlexDiv>
      </StyledModalContent>
    </StyledModalBackground>
  );
};

export default ConfirmDialogue;
