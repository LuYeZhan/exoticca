import styled, { CSSProperties } from "styled-components";
import { ButtonProps } from "../../types/button.types";

const applyStyles = (props: ButtonProps): CSSProperties => {
  return {
    color: props.color || "white",
    backgroundColor: props.backgroundColor || "black",
    padding: props.padding || "0.25em 1.5em",
    borderRadius: props.borderRadius || "100px",
    margin: props.margin || "0",
    alignSelf: 'center',
    fontSize: '1em'
  };
};

export const ButtonWrapper = styled.button.attrs<ButtonProps>(props => ({
  style: applyStyles(props)
}))<ButtonProps>``;
