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

const SearchBar = () => {
  // Создаем состояние для хранения выбранного значения
  const [selectedValue, setSelectedValue] = useState('');

  // Массив данных для выпадающего списка
  const options = ['Option 1', 'Option 2', 'Option 3'];

  // Обработчик изменения значения в выпадающем списке
  const handleSelectChange = e => {
    setSelectedValue(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Wrap>
          <SearchSelectText>Car brand</SearchSelectText>
          <SearchSelectBrand
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="">Enter the text</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </SearchSelectBrand>
        </Wrap>
        <Wrap>
          <SearchSelectText>Price/ 1hour</SearchSelectText>
          <SearchSelectPrice
            value={selectedValue}
            onChange={handleSelectChange}
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
