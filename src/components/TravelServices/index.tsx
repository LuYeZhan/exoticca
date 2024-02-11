import { ContainerWrapper, ServicesWrapper, TextWrapper } from "./wrappers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faBus, faCoffee, faSitemap, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const TravelServices = ({ services }: { services: string[] }) => {
  const transformServiceText = (text: string): string => {
    const lowerCaseText = text.toLowerCase();
    const capitalizedFirstLetterText = lowerCaseText.charAt(0).toUpperCase() + lowerCaseText.slice(1);
    const transformedText = capitalizedFirstLetterText.replace(/_/g, ' ');
    return transformedText;
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case "ACCOMMODATION":
        return faBed;
      case "ALL_FLIGHTS":
        return faPlane;
      case "ALL_TRANSFERS":
        return faBus;
      case "SOME_MEALS":
        return faCoffee;
      case "ACTIVITIES":
        return faSitemap;
      default:
        return faQuestionCircle; 
    }
  };

  return (
    <ServicesWrapper>
      {services.map((service, index) => (
        <ContainerWrapper>
          <FontAwesomeIcon icon={getServiceIcon(service)} />
          <TextWrapper key={index}>
            {transformServiceText(service)}
          </TextWrapper>
        </ContainerWrapper>
      ))}
    </ServicesWrapper>
  );
};

export default TravelServices;
