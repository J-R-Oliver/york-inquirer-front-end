import React from 'react';

const Comments = ({ comment_count }) => {
  return (
    <>
      <img src="/images/scroll.png" alt="scroll" height="11px" width="11px" />
      {comment_count}
    </>
  );
};

export default Comments;
