import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { InfoWrapper, SpanWrapper } from "./wrappers";
import Tags from "../Tags";
import { Tag } from "../../types/product.types";
import { Label } from "../../constants/labels";

const TravellerInfo = ({ hasSoloTraveller, hasPrivateTour, tags }: { hasSoloTraveller: boolean; hasPrivateTour: boolean; tags: Tag[] }) => {
  return (
    <InfoWrapper>
      {!hasPrivateTour ? <SpanWrapper background={true}>{ Label.travellersInfo1.toUpperCase()}</SpanWrapper> : null}
      {hasSoloTraveller ? (
        <>
          <SpanWrapper background={true}><FontAwesomeIcon icon={faUser} />{Label.travellersInfo2.toUpperCase()}</SpanWrapper>
        </>
      ) : null}
    <Tags tags={tags} wrapperComponent={SpanWrapper}/> 
    </InfoWrapper>
  );
};

export default TravellerInfo;
