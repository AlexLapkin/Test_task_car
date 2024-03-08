import React, { useState } from 'react';
import { Container } from './../../components/Container/Container';
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

const SearchBar = () => {
  // Создаем состояние для хранения выбранного значения
  const [selectedValueCarPrice, setSelectedValueCarPrice] = useState('');

  const [selectedValueCarBrand, setSelectedValueCarBrand] = useState('');

  // Массив данных для выпадающего списка
  const options = ['Option 1', 'Option 2', 'Option 3'];

  // Обработчик изменения значения в выпадающем списке
  const handleSelectBrandChange = e => {
    setSelectedValueCarBrand(e.target.value);
  };

  const handleSelectPriceChange = e => {
    setSelectedValueCarPrice(e.target.value);
  };

  return (
    <Container>
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
        <SearchButton />
      </Wrapper>
    </Container>
  );
};

export default SearchBar;
