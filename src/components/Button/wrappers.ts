import styled, { CSSProperties } from "styled-components";
import { ButtonProps } from "../../types/button.types";

const applyStyles = (props: ButtonProps): CSSProperties => {
  return {
    color: props.color || "white",
    backgroundColor: props.backgroundColor || "black",
    padding: props.padding || "1em",
    borderRadius: props.borderRadius || "100px",
    margin: props.margin || "0",
  };
};

export const ButtonWrapper = styled.button.attrs<ButtonProps>(props => ({
  style: applyStyles(props)
}))<ButtonProps>``;
