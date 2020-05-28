import React from 'react';
import Text from './Text';
import Button from './Button';

const ConfirmDialogue = ({ updateShowConfirmDialogue }) => {
  const handleClick = ({ target: { id } }) => {
    if (id === 'true') updateShowConfirmDialogue(true);
    else updateShowConfirmDialogue(false);
  };

  return (
    <>
      <Text>Are you sure?</Text>
      <Button type="button" id="true" onClick={handleClick}>
        OK
      </Button>
      <Button type="button" id="false" onClick={handleClick}>
        Cancel
      </Button>
    </>
  );
};

export default ConfirmDialogue;
