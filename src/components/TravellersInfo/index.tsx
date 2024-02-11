import { Tag } from "../../types/product.types";
import Tags from "../Tags";
import { InfoWrapper, SpanWrapper } from "./wrappers";

const TravellerInfo = ({ hasSoloTraveller, hasPrivateTour, tags }: { hasSoloTraveller: boolean; hasPrivateTour: boolean; tags: Tag[] }) => {
  return (
    <InfoWrapper>
      {!hasPrivateTour ? <SpanWrapper background={true}>Group Tours</SpanWrapper> : null}
      {hasSoloTraveller ? (
        <>
          
          <SpanWrapper background={true}><i>icon</i> Solo travellers</SpanWrapper>
        </>
      ) : null}
      <Tags tags={tags} wrapperComponent={SpanWrapper}/> 
    </InfoWrapper>
  );
};

export default TravellerInfo;
