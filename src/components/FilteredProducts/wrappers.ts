import styled from "styled-components"
import { Desktop } from "../../constants/devices"
export const CustomFilterInput= styled.input`
  min-width: 300px;
  background: lightgrey;
  padding: 1em;
  border-radius: 50px;
  @media ${Desktop} {
    min-width: 600px;
  }
`