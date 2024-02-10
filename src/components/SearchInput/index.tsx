import React, { useState, ChangeEvent } from 'react';
import { SearchInputProps } from '../../types/searchInput.types';

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    onSearch(searchInput);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <input type="text" value={searchInput} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default SearchInput;