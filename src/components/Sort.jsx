import React from 'react';
import Button from './Button';

const Sort = ({ updateSort }) => {
  const handleClick = ({ target: { id } }) => {
    updateSort(id);
  };

  return (
    <>
      <Button type="button" id="created_at" onClick={handleClick}>
        Latest
      </Button>
      <Button type="button" id="votes" onClick={handleClick}>
        Top Rated
      </Button>
      <Button type="button" id="comment_count" onClick={handleClick}>
        Most Discussed
      </Button>
    </>
  );
};

export default Sort;
