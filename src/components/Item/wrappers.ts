import styled from "styled-components";
import { Desktop } from "../../constants/devices";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  @media ${Desktop} {
    flex-direction: row;
    padding: 0.25em;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  @media ${Desktop} {
    flex-direction: row;
    padding: 0 0 0.5em 0;
  }
`

export const InfoWrapper = styled.div`
  @media ${Desktop} {
    padding-left: 1em;
  }
`

export const ParagraphWrapper = styled.p`
  font-size: 14px;
`

export const TitleWrapper = styled.h4`
  font-size: 1em;
  font-weight: normal;
  padding: 0.25em 0;
  @media ${Desktop} {
    font-size: 1.25em;
  }
`
