import React, { useState, ChangeEvent, KeyboardEvent, useRef } from 'react';
import { SearchInputProps } from '../../types/searchInput.types';
import { CustomInputWrapper, SearchWrapper, StyledInput } from './wrappers';
import Button from '../Button';
import { ButtonConstant } from '../../constants/button';
import { Label } from '../../constants/labels';

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSearch = () => {
    onSearch(searchInput);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
    <SearchWrapper>
      <CustomInputWrapper>
        <StyledInput
          placeholder={Label.input}
          type="text"
          value={searchInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button ref={buttonRef} onClick={handleSearch} padding={ButtonConstant.inputPadding} margin={ButtonConstant.inputMargin} label={ButtonConstant.secondary} />
      </CustomInputWrapper>
    </SearchWrapper>
  );
};

export default SearchInput;
