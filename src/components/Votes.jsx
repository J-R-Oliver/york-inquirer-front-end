import React from 'react';

const Votes = ({ votes }) => {
  return (
    <>
      <img src="/images/arrow.png" alt="up arrow" height="11px" width="11px" />
      {votes}
      <img
        src="/images/arrow.png"
        alt="down arrow"
        height="11px"
        width="11px"
      />
    </>
  );
};

export default Votes;
