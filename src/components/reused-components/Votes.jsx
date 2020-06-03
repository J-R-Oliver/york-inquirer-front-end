import React, { Component } from 'react';
import styled from 'styled-components';
import { patchVotes } from '../../utils/api';
import { StyledButton, StyledP, StyledImg } from '../styled-components/common';
import RetryError from './RetryError';

const Button = styled(StyledButton)`
  border: 2px solid hsl(0, 0%, 97%);
  background-color: hsl(0, 0%, 97%);
  border-radius: 3px;

  :focus,
  :hover {
    border: 2px solid rgb(196, 179, 122);
  }
`;

const StyledImgRotated = styled(StyledImg)`
  transform: rotate(180deg);
`;

class Votes extends Component {
  state = {
    userVote: 0,
    postVoteErr: ''
  };

  updateVotes = () => {
    const { userVote } = this.state;
    const { path, objectId } = this.props;

    patchVotes(path, objectId, userVote)
      .then(() => {
        this.setState({ postVoteErr: '' });
      })
      .catch(() => {
        this.setState({ postVoteErr: 'Error posting vote' });
      });
  };

  handleClick = userSelection => {
    this.setState(currentState => {
      return { userVote: currentState.userVote + userSelection };
    }, this.updateVotes);
  };

  handleError = () => {
    this.updateVotes();
  };

  render() {
    const { userVote, postVoteErr } = this.state;
    const { votes } = this.props;
    const { handleClick, handleError } = this;

    return (
      <>
        <StyledP secondary>
          <Button
            type="button"
            onClick={() => handleClick(1)}
            disabled={userVote > 0}
          >
            <StyledImg
              src="/images/arrow.png"
              alt="up arrow"
              width="15px"
              height="15px"
            />
          </Button>
          {userVote + votes}
          <Button
            type="button"
            onClick={() => handleClick(-1)}
            disabled={userVote < 0}
          >
            <StyledImgRotated
              src="/images/arrow.png"
              alt="down arrow"
              width="15px"
              height="15px"
            />
          </Button>
        </StyledP>
        {postVoteErr && (
          <RetryError err={postVoteErr} retryFunction={handleError} />
        )}
      </>
    );
  }
}

export default Votes;
