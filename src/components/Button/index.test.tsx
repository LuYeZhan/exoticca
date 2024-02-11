import { render, fireEvent, screen } from '@testing-library/react';
import Button from './';

jest.mock('axios');

describe('Button component', () => {
  test('renders button with label', () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick handler when button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Button label="Click me" onClick={onClickMock} />);
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  test('passes padding and margin props to button', () => {
    render(<Button label="Click me" padding="1em" margin="2em" />);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toHaveStyle('padding: 1em;');
    expect(buttonElement).toHaveStyle('margin: 2em;');
  });
});
