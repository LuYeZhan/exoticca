import { fireEvent, render, screen } from '@testing-library/react';
import FilteredProducts from './';
import { Country, MultiMarketItem } from '../../types/product.types';

const mockFilteredData: MultiMarketItem[] = [
  {
    id: 1,
    title: 'Title 1',
    destination: 'Destination 1',
    productAnimation: null, // Add appropriate value
    days: 5, // Add appropriate value
    images: [{ desktop: 'image-url', tablet: '', mobile: '' }],
    url: 'url-1',
    map: {
      showImage: true,
      image: { desktop: '', tablet: '', mobile: '', horizontal: '', horizontalSmall: '' },
    },
    highlights: [],
    includes: [],
    priceDetail: {
      fromPrice: 100,
      fromPriceBeautify: '100 USD',
      discountSaved: 20,
      oldPriceBeautify: '120 USD',
      pricingPercentage: 20,
      pricePerNight: '20 USD',
      oldPrice: 120,
    },
    tags: [],
    crafterDetail: {
      crafterSentence: 'Crafted by someone',
      crafterName: 'Craftsman',
      crafterAvatar: 'avatar-url',
    },
    hasPrivateTour: false,
    hasSoloTraveller: false,
    headLine: 'Headline 1',
    tagHeadLine: [],
    isLandOnly: false,
    isValid: true,
    extraNights: 0,
    isNew: false,
    isPromoted: false,
    isFlashSales: false,
    fcpFixedPrice: { hasFcpFixedPrice: false, price: 0 },
  }
];

const mockData: Country = {
  breadcrumb: [],
  hero: {
    shortDescription: 'Short description',
    images: {
      image: 'image-url',
      desktop: 'desktop-image-url',
      tablet: 'tablet-image-url',
      mobile: 'mobile-image-url',
    },
    priceHeader: 'Price header',
    percentageHeader: 'Percentage header',
    isDiscount: false,
  },
  name: 'Country Name',
  flag: 'flag-url',
  type: 'country',
  id: 1,
  slug: 'country-slug',
  descriptionIcon: 'description-icon-url',
  mapUrl: 'map-url',
  longDescription: 'Long description',
  POIS: {
    title: 'Points of Interest',
    cards: [],
  },
  usefulInformation: {
    country: 'Country',
    items: [],
  },
  nearby: {
    title: 'Nearby',
    icon: 'nearby-icon',
    cards: [],
  },
  similar: [],
  destinations: {
    featuredMonoMarket: [],
    featuredMultiMarket: [],
    monoMarket: [],
    multiMarket: [],
  },
  metadata: {
    title: 'Title',
    desc: 'Description',
    keywords: 'Keywords',
    OGTitle: 'OG Title',
    OGDescription: 'OG Description',
    OGType: 'OG Type',
    OGSiteName: 'OG Site Name',
    OGImage: 'OG Image',
    OGUrl: 'OG Url',
    canonicalLink: 'Canonical Link',
    OGUri: 'OG Uri',
    alternateLinks: [{ locale: 'en', domain: 'domain' }],
  },
  emptyUsefulInformation: false,
  travelGuide: {
    events: {
      url: 'events-url',
      imageUrl: 'events-image-url',
      description: 'Events description',
    },
    gastronomy: {
      url: 'gastronomy-url',
      imageUrl: 'gastronomy-image-url',
      description: 'Gastronomy description',
    },
    shopping: {
      url: 'shopping-url',
      imageUrl: 'shopping-image-url',
      description: 'Shopping description',
    },
  },
  fcpFixedPrice: { hasFcpFixedPrice: false, price: 0 },
};

describe('FilteredProducts', () => {
  it('renders filtered data and filter input', () => {
    render(
      <FilteredProducts
        filteredData={mockFilteredData}
        handleFilter={() => {}}
        data={mockData}
      />
    );

    const filterInput = screen.getByPlaceholderText(
      `Filter by anything on the country ${mockData.name}`
    );
    expect(filterInput).toBeInTheDocument();
  });

  it('renders no match message when filtered data is empty', () => {
    render(
      <FilteredProducts
        filteredData={[]}
        handleFilter={() => {}}
        data={mockData}
      />
    );

    const noMatchMessage = screen.getByText(
      "There's no match at the moment, try with another word."
    );
    expect(noMatchMessage).toBeInTheDocument();
  });

  it('calls handleFilter function when input value changes', () => {
    const mockHandleFilter = jest.fn();
    render(
      <FilteredProducts
        filteredData={mockFilteredData}
        handleFilter={mockHandleFilter}
        data={mockData}
      />
    );

    const filterInput = screen.getByPlaceholderText(
      `Filter by anything on the country ${mockData.name}`
    );
    fireEvent.change(filterInput, { target: { value: 'test' } });

    expect(mockHandleFilter).toHaveBeenCalledWith(expect.any(Object));
  });
});
