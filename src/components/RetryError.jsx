import React from 'react';
import Text from './Text';
import Button from './Button';

const RetryError = ({ err, retryFunction }) => {
  const handleClick = () => {
    retryFunction();
  };

  return (
    <>
      <Button type="button" onClick={handleClick}>
        <Text>{`${err}. Tap to retry.`}</Text>
      </Button>
    </>
  );
};

export default RetryError;
