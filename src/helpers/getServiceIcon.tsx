import { faBed, faBus, faCoffee, faPlane, faQuestionCircle, faSitemap } from "@fortawesome/free-solid-svg-icons";


export const getServiceIcon = (service: string) => {
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