import { render, screen } from '@testing-library/react';
import  TravellerInfo  from './'; // Assuming this is the correct path to your component

describe('TravellerInfo component', () => {
  const tags = [
    {
        "alias": "Multi-Country",
        "name": "Multi-Country",
        "description": "Travel across multiple countries with the same trip",
        "categoryName": "",
        "uri": "/us/landing/multi-country-tours",
        "tagId": "0a28fab1-87de-4c0b-9928-41c1bde95e77"
    },
    {
        "alias": "Nature",
        "name": "Nature",
        "description": "Trips with visits to natural environments",
        "categoryName": "",
        "uri": "/us/landing/nature-tours",
        "tagId": "0c081d29-cd34-416e-988f-e04aff45abe1"
    },
    {
        "alias": "Couples",
        "name": "Couples",
        "description": "Romantic getaways for couples",
        "categoryName": "",
        "uri": "/us/landing/couples-tours",
        "tagId": "29ecd7d8-c195-43f2-adf9-dd71252dcda8"
    },
    {
        "alias": "Safari",
        "name": "Safari",
        "description": "Trips with animal safaris",
        "categoryName": "",
        "uri": "/us/landing/safari-tours",
        "tagId": "65ea3c19-c53f-4b47-a12d-f2c9bba849bf"
    },
    {
        "alias": "Family",
        "name": "Family",
        "description": "Trips suitable for families with children ",
        "categoryName": "",
        "uri": "/us/landing/family-tours",
        "tagId": "bdc09d1a-e972-46cc-a49d-af89efaea063"
    }
]

  it('renders group tours when hasPrivateTour is false', () => {
    render(<TravellerInfo hasSoloTraveller={false} hasPrivateTour={false} tags={tags} />);
    expect(screen.getByText('Group Tours')).toBeInTheDocument();
  });

  it('renders solo travellers when hasSoloTraveller is true', () => {
    render(<TravellerInfo hasSoloTraveller={true} hasPrivateTour={false} tags={tags} />);
    expect(screen.getByText('Solo travellers')).toBeInTheDocument();
  });

  it('renders tags using SpanWrapper', () => {
    render(<TravellerInfo hasSoloTraveller={false} hasPrivateTour={false} tags={tags} />);
    tags.forEach(tag => {
      expect(screen.getByText(tag.name)).toBeInTheDocument();
    });
  });
});
