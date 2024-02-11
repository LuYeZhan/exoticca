import { useEffect, useState } from "react";
import { MultiMarketItem } from "../../types/product.types";
import Highlights from "../Highlights";
import Prices from "../Prices";
import TravelServices from "../TravelServices";
import TravellerInfo from "../TravellersInfo";
import { ContentWrapper, InfoWrapper, ItemWrapper, ParagraphWrapper, TitleWrapper } from "./wrappers";
import MobilePrices from "../MobilePrices";
import Button from "../Button";
import { ButtonConstant } from "../../constants/button";
import { Label } from "../../constants/labels";

const Item = (item: MultiMarketItem) => {

  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, [isDesktop]);

  return (
    <ItemWrapper>
      <InfoWrapper>
      {!isDesktop && (
        <MobilePrices  
        pricingPercentage={item.priceDetail.pricingPercentage}
        oldPriceBeautify={item.priceDetail.oldPriceBeautify}
        fromPriceBeautify={item.priceDetail.fromPriceBeautify}
        pricePerNight={item.priceDetail.pricePerNight}
        /> 
      )}
        <ParagraphWrapper>{item.destination} {Label.item1} {item.days} {Label.item2}</ParagraphWrapper>
        <TitleWrapper>{item.title}</TitleWrapper>
        <ContentWrapper>
          <Highlights highlights={item.highlights} />
          <TravelServices services={item.includes} />
        </ContentWrapper>
        <TravellerInfo 
        hasSoloTraveller={item.hasSoloTraveller} 
        hasPrivateTour={item.hasPrivateTour}
        tags={item.tags}
        />
      </InfoWrapper>
      {isDesktop && (
        <Prices
          pricingPercentage={item.priceDetail.pricingPercentage}
          oldPriceBeautify={item.priceDetail.oldPriceBeautify}
          fromPriceBeautify={item.priceDetail.fromPriceBeautify}
          pricePerNight={item.priceDetail.pricePerNight}
        />
      )}
      {!isDesktop && (
        <Button label={ButtonConstant.primary} padding={ButtonConstant.padding} margin={ButtonConstant.margin}/> 
      )}
    </ItemWrapper>
  );
};

export default Item;