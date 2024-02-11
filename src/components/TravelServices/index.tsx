import { ContainerWrapper, ServicesWrapper, TextWrapper } from "./wrappers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServiceIcon } from "../../helpers/getServiceIcon";
import { transformServiceText } from "../../helpers/transformServiceText";

const TravelServices = ({ services }: { services: string[] }) => {
  return (
    <ServicesWrapper>
      {services.map((service, index) => (
        <ContainerWrapper key={index}>
          <FontAwesomeIcon icon={getServiceIcon(service)} data-testid="font-awesome-icon" />
          <TextWrapper>
            {transformServiceText(service)}
          </TextWrapper>
        </ContainerWrapper>
      ))}
    </ServicesWrapper>
  );
};

export default TravelServices;
