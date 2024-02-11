import { MultiMarketItem } from "../../types/product.types";
import Highlights from "../Highlights";
import Prices from "../Prices";
import TravelServices from "../TravelServices";
import TravellerInfo from "../TravellersInfo";
import { ContentWrapper, InfoWrapper, ItemWrapper } from "./wrappers";

const Item = (item: MultiMarketItem) => {

  return (
    <ItemWrapper>
      <InfoWrapper>
        <p>{item.destination} in {item.days} days</p>
        <h4>{item.title}</h4>
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
      <Prices
        pricingPercentage={item.priceDetail.pricingPercentage}
        oldPriceBeautify={item.priceDetail.oldPriceBeautify}
        fromPriceBeautify={item.priceDetail.fromPriceBeautify}
        pricePerNight={item.priceDetail.pricePerNight}
      />
    </ItemWrapper>
  );
};

export default Item;