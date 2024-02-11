import { PricesProps } from "../../types/prices.types";
import Button from "../Button";
import { Container, DiscountedPriceWrapper, OldPrice, PriceWrapper, PricingPercentageWrapper, SmallPriceWrapper } from "./wrappers";

const Prices = ({ pricingPercentage, oldPriceBeautify, fromPriceBeautify, pricePerNight }:PricesProps) => {
  return (
    <Container>
      <PriceWrapper>
        <PricingPercentageWrapper>-{pricingPercentage} %</PricingPercentageWrapper>
        <SmallPriceWrapper>From: <OldPrice>{oldPriceBeautify}</OldPrice></SmallPriceWrapper>      
        <DiscountedPriceWrapper>{fromPriceBeautify}</DiscountedPriceWrapper>
        <SmallPriceWrapper>Per night: {pricePerNight}</SmallPriceWrapper>
      </PriceWrapper>
      <Button label='See trip' />
    </Container>
  );
};

export default Prices;
