import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './';

describe('SearchInput component', () => {
  it('calls onSearch when search button is clicked', () => {
    const onSearchMock = jest.fn();
    render(<SearchInput onSearch={onSearchMock} />);

    const inputElement = screen.getByPlaceholderText('Search your next destination');
    fireEvent.change(inputElement, { target: { value: 'Paris' } });

    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);

    expect(onSearchMock).toHaveBeenCalledWith('Paris');
  });

  it('calls onSearch when Enter key is pressed in the input field', () => {
    const onSearchMock = jest.fn();
    render(<SearchInput onSearch={onSearchMock} />);

    const inputElement = screen.getByPlaceholderText('Search your next destination');
    fireEvent.change(inputElement, { target: { value: 'London' } });

    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(onSearchMock).toHaveBeenCalledWith('London');
  });
});
