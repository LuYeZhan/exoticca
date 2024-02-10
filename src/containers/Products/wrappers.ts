import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  margin: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 50%;
  float: left;
  object-fit: cover;
  height: 100%;
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