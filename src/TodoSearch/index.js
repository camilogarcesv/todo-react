import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

export const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  return (
      <input 
        className="TodoSearch" 
        placeholder="Cebolla" 
        onChange={onSearchValueChange}
        value={searchValue}
      />
  );
};
