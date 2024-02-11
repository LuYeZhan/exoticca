import styled from "styled-components";
import { Desktop } from "../../constants/devices";

export const HighlightsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5em;
  @media ${Desktop}{
    line-height: 1em;
  }
`