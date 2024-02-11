import styled from "styled-components"

export const Container = styled.div`
  display: flex; 
  flex-direction: column;
  padding-left: 2em;
  justify-content: space-between;
`

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`

export const PricingPercentageWrapper = styled.span`
  padding: 0.5em;
  border-radius: 10px;
  background-color: rgb(103, 208, 113);
`

export const OldPrice = styled.span`
  text-decoration: line-through;
`;

export const DiscountedPriceWrapper = styled.p`
  font-size: 1.5em;
  font-weight: 600;
`

export const SmallPriceWrapper = styled.p`
  font-size: 0.75em;
  color: grey;
`