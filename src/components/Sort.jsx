import React from 'react';
import Button from './Button';

const Sort = ({ updateSort }) => {
  const handleSort = ({ target: { id } }) => {
    updateSort(id);
  };

  return (
    <>
      <Button type="button" id="created_at" onClick={handleSort}>
        Latest
      </Button>
      <Button type="button" id="votes" onClick={handleSort}>
        Top Rated
      </Button>
      <Button type="button" id="comment_count" onClick={handleSort}>
        Most Discussed
      </Button>
    </>
  );
};

export default Sort;
