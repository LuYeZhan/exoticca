import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 10em;
`;

export const Card = styled.div`
  margin: 10px;
  background-color: #f9f9f9;
  border-radius: 1em;
  border: 1px solid lightgrey;
`;

export const CardImage = styled.img`
  width: 50%;
  float: left;
  object-fit: cover;
  height: 100%;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
`;

export const CardContent = styled.div`
`;

export const Title = styled.h2`
  margin-top: 0;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;