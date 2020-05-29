import React, { Component } from 'react';
import { patchVotes } from '../utils/api';
import Text from './Text';
import RetryError from './RetryError';

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
        this.setState({ postVoteErr: 'Error posting Vote' });
      });
  };

  handleClick = ({ target: { id } }) => {
    const voteOptions = {
      up: 1,
      down: -1
    };

    const userVote = voteOptions[id];
    this.setState({ userVote });
    this.updateVotes();
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
        <Text>
          <button type="button" onClick={handleClick} disabled={userVote > 0}>
            <img
              src="/images/arrow.png"
              alt="up arrow"
              id="up"
              height="11px"
              width="11px"
            />
          </button>
          {userVote + votes}
          <button type="button" onClick={handleClick} disabled={userVote < 0}>
            <img
              src="/images/arrow.png"
              alt="down arrow"
              id="down"
              height="11px"
              width="11px"
            />
          </button>
        </Text>
        {postVoteErr && (
          <RetryError err={postVoteErr} retryFunction={handleError} />
        )}
      </>
    );
  }
}

export default Votes;
