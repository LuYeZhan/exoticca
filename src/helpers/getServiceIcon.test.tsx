import { faBed, faBus, faCoffee, faPlane, faQuestionCircle, faSitemap } from "@fortawesome/free-solid-svg-icons";
import { getServiceIcon } from "./getServiceIcon";

describe('getServiceIcon', () => {
  it('returns the correct icon for ACCOMMODATION service', () => {
    expect(getServiceIcon('ACCOMMODATION')).toEqual(faBed);
  });

  it('returns the correct icon for ALL_FLIGHTS service', () => {
    expect(getServiceIcon('ALL_FLIGHTS')).toEqual(faPlane);
  });

  it('returns the correct icon for ALL_TRANSFERS service', () => {
    expect(getServiceIcon('ALL_TRANSFERS')).toEqual(faBus);
  });

  it('returns the correct icon for SOME_MEALS service', () => {
    expect(getServiceIcon('SOME_MEALS')).toEqual(faCoffee);
  });

  it('returns the correct icon for ACTIVITIES service', () => {
    expect(getServiceIcon('ACTIVITIES')).toEqual(faSitemap);
  });

  it('returns the default icon for unknown service', () => {
    expect(getServiceIcon('UNKNOWN')).toEqual(faQuestionCircle);
  });
});
