import React, { Component } from 'react';
import styled from 'styled-components';
import {
  StyledButton,
  StyledCardDiv,
  StyledPaddingDiv
} from '../styled-components/common';

const StyledTextArea = styled.textarea`
  width: 97%;
  border: 2px solid rgb(196, 179, 122);
  border-radius: 3px;
  resize: none;
`;

class NewComment extends Component {
  state = {
    comment: ''
  };

  handleSubmit = event => {
    const { comment } = this.state;
    const { updateStagedComment } = this.props;

    event.preventDefault();
    updateStagedComment(comment);
    this.setState({ comment: '' });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { comment } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <StyledCardDiv>
        <StyledPaddingDiv>
          <form onSubmit={handleSubmit}>
            <StyledTextArea
              name="comment"
              onChange={handleChange}
              value={comment}
              placeholder="Add a comment..."
              aria-label="Add a comment..."
              required
              rows="5"
              cols="31"
            />
            <StyledButton type="submit">Submit</StyledButton>
          </form>
        </StyledPaddingDiv>
      </StyledCardDiv>
    );
  }
}

export default NewComment;
