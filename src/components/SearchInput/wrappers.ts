import styled from "styled-components";
import { Desktop } from "../../constants/devices";

export const StyledInput = styled.input`
  margin: 1em;
  border: none;
  border-radius: 5px;
  min-width: 170px;
  height: auto;
  outline: none;
`;

export const CustomInputWrapper = styled.div`
  background-color: white;
  border-radius: 50px;
  display: none;
  @media ${Desktop} {
    display: block;
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0;
`