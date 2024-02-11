import styled from "styled-components"

export const Container = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1em;
`

export const PriceWrapper = styled.div`
  display: flex;
  gap: 5px;
`

export const PricingPercentageWrapper = styled.span`
  padding: 0.25em;
  border-radius: 50px;
  background-color: rgb(103, 208, 113);
  align-self: center;
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

export const SmallPriceContainer = styled.div`
  margin-left: 0.5em;
`