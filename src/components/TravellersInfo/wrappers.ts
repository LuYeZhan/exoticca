import styled, { css } from "styled-components";
import { Desktop } from "../../constants/devices";

interface SpanWrapperProps {
  $background?: boolean;
}

export const SpanWrapper = styled.span<SpanWrapperProps>`
  padding: 0.25em;
  border-radius: 5px;
  border: 1px solid rgb(202, 202, 202);

  ${(props) =>
    !props.$background &&
    css`
      background: rgb(229, 229, 229);
      border: 1px solid lightgrey;
    `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  @media ${Desktop} {
    width: 100%;
    padding: 0;
    justify-content: space-between;
  }
`