import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { InfoWrapper, SpanWrapper } from "./wrappers";
import Tags from "../Tags";
import { Tag } from "../../types/product.types";

const TravellerInfo = ({ hasSoloTraveller, hasPrivateTour, tags }: { hasSoloTraveller: boolean; hasPrivateTour: boolean; tags: Tag[] }) => {
  return (
    <InfoWrapper>
      {!hasPrivateTour ? <SpanWrapper background={true}>Group Tours</SpanWrapper> : null}
      {hasSoloTraveller ? (
        <>
          <SpanWrapper background={true}><FontAwesomeIcon icon={faUser} /> Solo travellers</SpanWrapper>
        </>
      ) : null}
    <Tags tags={tags} wrapperComponent={SpanWrapper}/> 
    </InfoWrapper>
  );
};

export default TravellerInfo;
