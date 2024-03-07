import React, { useState } from 'react';
import { SearchInputWrapper } from './SearchInput.styled';

const SearchInput = () => {
  // Создаем состояние для хранения выбранного значения
  const [selectedValue, setSelectedValue] = useState('');

  // Массив данных для выпадающего списка
  const options = ['Option 1', 'Option 2', 'Option 3'];

  // Обработчик изменения значения в выпадающем списке
  const handleSelectChange = e => {
    setSelectedValue(e.target.value);
  };

  return (
    // <SearchInputWrapper value={selectedValue} onChange={handleSelectChange}>
    //   <option value="">Enter the text</option>
    //   {options.map((option, index) => (
    //     <option key={index} value={option}>
    //       {option}
    //     </option>
    //   ))}

    //   {/* <p>Выбранное значение: {selectedValue}</p> */}
    // </SearchInputWrapper>
    <SearchInputWrapper></SearchInputWrapper>
  );
};

export default SearchInput;
