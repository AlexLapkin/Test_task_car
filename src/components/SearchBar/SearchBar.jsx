import React, { useState, useEffect } from 'react';
import {
  SearchSelectBrand,
  SearchSelectPrice,
  SearchInputMileageFrom,
  SearchInputMileageTo,
  SearchSelectText,
} from './SearchBar.styled';
import SearchButton from './SearchButton';
import { Wrapper, Wrap, WrapCont } from './SearchBar.styled';
import optionsBrand from './../../helpers/makes.json';
import { useSelector } from 'react-redux';
import { selectAllAdverts } from '../../redux/adverts/adverts.selectors';

const SearchBar = ({ filterAdverts, setFilterAdverts }) => {
  const [selectedValueCarPrice, setSelectedValueCarPrice] = useState('');
  const [selectedValueCarBrand, setSelectedValueCarBrand] = useState('');
  const allAdverts = useSelector(state => selectAllAdverts(state));
  const options = ['10$', '20$', '30$', '40$', '50$'];

  const handleSelectBrandChange = e => {
    setSelectedValueCarBrand(e.target.value);
  };

  const handleSelectPriceChange = e => {
    setSelectedValueCarPrice(e.target.value);
  };

  const onSearchByMake = () => {
    const filterAdverts = allAdverts.find(
      advert => advert.make === selectedValueCarBrand
    );
    setFilterAdverts(filterAdverts);
  };

  return (
    <Wrapper>
      <Wrap>
        <SearchSelectText>Car brand</SearchSelectText>
        <SearchSelectBrand
          value={selectedValueCarBrand}
          onChange={handleSelectBrandChange}
        >
          <option value="">Enter the text</option>
          {optionsBrand.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </SearchSelectBrand>
      </Wrap>
      <Wrap>
        <SearchSelectText>Price/ 1hour</SearchSelectText>
        <SearchSelectPrice
          value={selectedValueCarPrice}
          onChange={handleSelectPriceChange}
        >
          <option value="">To $</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </SearchSelectPrice>
      </Wrap>

      <Wrap>
        <SearchSelectText>Price/ 1hour</SearchSelectText>
        <WrapCont>
          <SearchInputMileageFrom
            input
            type="text"
            id="username"
            name="username"
            placeholder="From"
          ></SearchInputMileageFrom>
          <SearchInputMileageTo
            input
            type="text"
            id="username"
            name="username"
            placeholder="To"
          ></SearchInputMileageTo>
        </WrapCont>
      </Wrap>
      <SearchButton onSearchByMake={onSearchByMake} />
    </Wrapper>
  );
};

export default SearchBar;
