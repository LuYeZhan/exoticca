import styled from "styled-components";
import { Desktop } from "../../constants/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  & h2 {
    text-align: center;
  }
  @media ${Desktop} {
    padding: 1em 10em;
  }
`;

export const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 1em;
  border: 1px solid lightgrey;
  display: flex;
  height: auto;
  flex-direction: column;
  @media ${Desktop} {
    flex-direction: row;
    margin: 10px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  @media ${Desktop} {
    width: 50%;
    height: 100%;
    border-top-right-radius: 0;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
  }
`;

export const SubTitleWrapper = styled.div`
  margin-top: 10em;
  @media ${Desktop} {
    margin-top: 16em;
  }
`;

export const Title = styled.h2`
  font-size: 2em;
  font-weight: normal;
  @media ${Desktop} {
    font-size: 1.5em;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;