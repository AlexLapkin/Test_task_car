import React from 'react';
import { Button } from './SearchButton.styled';

const SearchButton = ({ onSearchByMake }) => {
  return (
    <>
      <Button onClick={onSearchByMake}>Search</Button>
    </>
  );
};

export default SearchButton;
