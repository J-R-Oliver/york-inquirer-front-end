import React from 'react';
import { StyledImg } from '../styled-components/common';

const Comments = ({ comment_count }) => {
  return (
    <>
      <StyledImg
        src="/images/scroll.png"
        alt="scroll"
        width="13px"
        height="13px"
      />
      {comment_count}
    </>
  );
};

export default Comments;
