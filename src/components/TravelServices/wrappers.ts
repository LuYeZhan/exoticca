import styled from "styled-components"
import { Desktop } from "../../constants/devices"

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${Desktop} {
    padding-left: 2em;
  }
`

export const TextWrapper = styled.p`
  padding-left: 0.5em;
`

export const ContainerWrapper = styled.div`
  display: none;
  @media ${Desktop} {
    display: flex;
  }
`