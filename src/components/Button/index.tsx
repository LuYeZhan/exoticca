import React, { forwardRef } from 'react';
import { ButtonWrapper } from "./wrappers";
import { ButtonProps } from '../../types/button.types';

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({ label, onClick, padding, margin }, ref) => {
  return (
    <ButtonWrapper ref={ref} padding={padding} margin={margin} onClick={onClick}>
      {label}
    </ButtonWrapper>
  );
};

export default forwardRef(Button);
