import { ButtonConstant } from "../../constants/button";
import { Label } from "../../constants/labels";
import { PricesProps } from "../../types/prices.types";
import Button from "../Button";
import { Container, DiscountedPriceWrapper, OldPrice, PriceWrapper, PricingPercentageWrapper, SmallPriceWrapper } from "./wrappers";

const Prices = ({ pricingPercentage, oldPriceBeautify, fromPriceBeautify, pricePerNight }:PricesProps) => {
  return (
    <Container>
      <PriceWrapper>
        <PricingPercentageWrapper>-{pricingPercentage} %</PricingPercentageWrapper>
        <SmallPriceWrapper>{Label.price1} <OldPrice>{oldPriceBeautify}</OldPrice></SmallPriceWrapper>      
        <DiscountedPriceWrapper>{fromPriceBeautify}</DiscountedPriceWrapper>
        <SmallPriceWrapper>{Label.price2} {pricePerNight}</SmallPriceWrapper>
      </PriceWrapper>
      <Button label={ButtonConstant.primary} />
    </Container>
  );
};

export default Prices;
