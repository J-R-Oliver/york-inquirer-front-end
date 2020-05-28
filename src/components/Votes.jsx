import React, { Component } from 'react';
import { patchVotes } from '../utils/api';

class Votes extends Component {
  state = {
    userVote: 0
  };

  handleClick = ({ target: { id } }) => {
    const { path, objectId } = this.props;

    const voteOptions = {
      up: 1,
      down: -1
    };

    const userVote = voteOptions[id];
    this.setState({ userVote });

    patchVotes(path, objectId, userVote);
  };

  render() {
    const { userVote } = this.state;
    const { votes } = this.props;
    const { handleClick } = this;

    return (
      <>
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
      </>
    );
  }
}

export default Votes;
