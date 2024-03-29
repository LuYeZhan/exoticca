import { HighlightsWrapper } from "./wrappers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { HighlightsType } from "../../types/product.types";
import { Label } from "../../constants/labels";

const Highlights = ({ highlights }: { highlights: HighlightsType[] }) => {
  const additionalHighlights = highlights.length > 4 ? highlights.length - 4 : 0;
  const displayHighlights = additionalHighlights > 0 ? highlights.slice(0, 4) : highlights;

  return (
    <HighlightsWrapper>
      {displayHighlights.map((highlight, index) => (
        <p key={index}>
          <FontAwesomeIcon icon={faMapMarkerAlt}/> {highlight.title}
        </p>
      ))}
      {additionalHighlights > 0 && <p>+{additionalHighlights} {Label.hightlights}</p>}
    </HighlightsWrapper>
  );
};

export default Highlights;
