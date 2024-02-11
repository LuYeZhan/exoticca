import { Label } from "../../constants/labels";
import { PricesProps } from "../../types/prices.types";
import { Container, DiscountedPriceWrapper, OldPrice, PriceWrapper, PricingPercentageWrapper, SmallPriceContainer, SmallPriceWrapper } from "./wrappers";

const MobilePrices = ({ pricingPercentage, oldPriceBeautify, fromPriceBeautify, pricePerNight }:PricesProps) => {
  return (
    <Container>
      <PriceWrapper>
        <PricingPercentageWrapper>-{pricingPercentage} %</PricingPercentageWrapper>
        <SmallPriceContainer>
          <SmallPriceWrapper>{Label.price1} <OldPrice>{oldPriceBeautify}</OldPrice></SmallPriceWrapper>      
          <DiscountedPriceWrapper>{fromPriceBeautify}</DiscountedPriceWrapper>
          <SmallPriceWrapper>{Label.price2} {pricePerNight}</SmallPriceWrapper>
        </SmallPriceContainer>
      </PriceWrapper>
    </Container>
  );
};

export default MobilePrices;
