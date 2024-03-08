import React from 'react';
import { Button } from './ButtonLoadMore.styled';
// import { useLocation } from 'react-router-dom';

const ButtonLoadMore = ({ onClickLoadMore }) => {
  return (
    <>
      <Button onClick={onClickLoadMore}>Load more</Button>
    </>
  );
};

export default ButtonLoadMore;
