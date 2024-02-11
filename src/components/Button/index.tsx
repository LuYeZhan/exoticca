import React, { forwardRef } from 'react';
import { ButtonWrapper } from "./wrappers";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  padding?: string;
  margin?: string;
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({ label, onClick, padding, margin }, ref) => {
  return (
    <ButtonWrapper ref={ref} padding={padding} margin={margin} onClick={onClick}>
      {label}
    </ButtonWrapper>
  );
};

export default forwardRef(Button);
