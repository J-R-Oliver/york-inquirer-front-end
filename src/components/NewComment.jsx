import React, { Component } from 'react';
import Button from './Button';

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
      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          onChange={handleChange}
          value={comment}
          placeholder="Add a comment..."
          aria-label="Add a comment..."
        />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default NewComment;
