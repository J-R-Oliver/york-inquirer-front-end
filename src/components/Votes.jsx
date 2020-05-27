import React, { Component } from 'react';
import { patchVotes } from '../utils/api';

class Votes extends Component {
  state = {
    userVote: 0
  };

  handleArrow = ({ target }) => {
    const { endpoint, id } = this.props;

    const userSelection = target.alt.split(' ')[0];
    const voteOptions = {
      up: 1,
      down: -1
    };

    const userVote = voteOptions[userSelection];
    this.setState({ userVote });

    patchVotes(endpoint, id, userVote);
  };

  render() {
    const { userVote } = this.state;
    const { votes } = this.props;

    return (
      <>
        <button
          type="button"
          onClick={this.handleArrow}
          disabled={userVote > 0}
        >
          <img
            src="/images/arrow.png"
            alt="up arrow"
            height="11px"
            width="11px"
          />
        </button>
        {userVote + votes}
        <button
          type="button"
          onClick={this.handleArrow}
          disabled={userVote < 0}
        >
          <img
            src="/images/arrow.png"
            alt="down arrow"
            height="11px"
            width="11px"
          />
        </button>
      </>
    );
  }
}

export default Votes;
