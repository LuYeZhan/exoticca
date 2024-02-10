import styled, { css } from "styled-components";

interface SpanWrapperProps {
  background?: boolean;
}

export const SpanWrapper = styled.span<SpanWrapperProps>`
  padding: 0.25em;
  border-radius: 5px;
  border: 1px solid rgb(202, 202, 202);

  ${(props) =>
    !props.background &&
    css`
      background: rgb(229, 229, 229);
      border: 1px solid lightgrey;
    `}
`;
