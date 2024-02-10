import { Tag } from "../../types/product.types";
import Tags from "../Tags";
import { SpanWrapper } from "./wrappers";

const TravellerInfo = ({ hasSoloTraveller, hasPrivateTour, tags }: { hasSoloTraveller: boolean; hasPrivateTour: boolean; tags: Tag[] }) => {
  console.log(hasSoloTraveller) 
  console.log(hasPrivateTour)
  return (
    <div>
      {!hasPrivateTour ? <SpanWrapper background={true}>Group Tours</SpanWrapper> : null}
      {hasSoloTraveller ? (
        <>
          <i>icon</i>
          <SpanWrapper background={true}>Solo travellers</SpanWrapper>
        </>
      ) : null}
      <Tags tags={tags} wrapperComponent={SpanWrapper}/> 
    </div>
  );
};

export default TravellerInfo;
