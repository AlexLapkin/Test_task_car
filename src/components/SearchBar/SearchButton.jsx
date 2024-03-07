import React from 'react';
import { Button } from './SearchButton.styled';

const SearchButton = () => {
  // Создаем состояние для хранения выбранного значения
  //   const [selectedValue, setSelectedValue] = useState('');

  // Обработчик изменения значения в выпадающем списке
  //   const handleSelectChange = e => {
  //     setSelectedValue(e.target.value);
  //   };

  return (
    <>
      <Button>Search</Button>
    </>
  );
};

export default SearchButton;
