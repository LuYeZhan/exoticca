import { MultiMarketItem } from "../../types/product.types";
import Highlights from "../Highlights";
import TravelServices from "../TravelServices";
import TravellerInfo from "../TravellersInfo";
import { ContentWrapper, ItemWrapper } from "./wrappers";

const Item = (item: MultiMarketItem) => {

  return (
    <ItemWrapper>
      <div>
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
      </div>
      <div>
        <p>{item.priceDetail.pricingPercentage}</p>
        <p>{item.priceDetail.oldPriceBeautify}</p>
        <p>{item.priceDetail.fromPriceBeautify}</p>
        <p>Per night: {item.priceDetail.pricePerNight}</p>
        <button>See trip</button>
      </div>
    </ItemWrapper>
  );
};

export default Item;