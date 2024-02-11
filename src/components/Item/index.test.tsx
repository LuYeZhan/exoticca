import { render, screen } from '@testing-library/react';
import Item from './';
import { MultiMarketItem } from '../../types/product.types';

describe('Item component', () => {
  beforeEach(() => {
    // Mocking window.innerWidth to simulate different screen sizes
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024, // Desktop width
    });
  });

  it('renders desktop version correctly', () => {
    const item: MultiMarketItem = {
      id: 123,
      destination: 'Destination',
      days: 5,
      title: 'Title',
      images: [{ desktop: 'desktopUrl', tablet: 'tabletUrl', mobile: 'mobileUrl' }],
      productAnimation: 'animationUrl',
      url: 'productUrl',
      map: {
        showImage: true,
        image: {
          desktop: 'desktopMapUrl',
          tablet: 'tabletMapUrl',
          mobile: 'mobileMapUrl',
          horizontal: 'horizontalMapUrl',
          horizontalSmall: 'horizontalSmallMapUrl',
        },
      },
      highlights: [{ title: 'Highlight 1', url: 'url1' }],
      includes: ['Service 1'],
      priceDetail: {
        fromPrice: 1000,
        fromPriceBeautify: '$1000',
        discountSaved: 100,
        oldPriceBeautify: '$900',
        pricingPercentage: 10,
        pricePerNight: '$200',
        oldPrice: 900,
      },
      tags: [],
      crafterDetail: {
        crafterSentence: 'Crafter sentence',
        crafterName: 'Crafter name',
        crafterAvatar: 'Crafter avatar',
      },
      hasPrivateTour: false,
      hasSoloTraveller: true,
      headLine: 'Headline',
      tagHeadLine: [],
      isLandOnly: false,
      isValid: true,
      extraNights: 2,
      isNew: false,
      isPromoted: true,
      isFlashSales: false,
      fcpFixedPrice: {
        hasFcpFixedPrice: true,
        price: 500,
      },
    };


    render(<Item {...item} />);

    // Check if desktop version elements are rendered
    expect(screen.getByText('Destination in 5 days +')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Highlight 1')).toBeInTheDocument();
    expect(screen.getByText('Service 1')).toBeInTheDocument();
    expect(screen.queryByText('Tag 1')).toBeNull(); // Changed from getByText to queryByText
    expect(screen.getByText('$1000')).toBeInTheDocument();
    expect(screen.getByText('$900')).toBeInTheDocument();
  });

  it('renders mobile version correctly', () => {
    // Mocking window.innerWidth to simulate mobile width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768, // Mobile width
    });

    const item: MultiMarketItem = {
      id: 123,
      destination: 'Destination',
      days: 5,
      title: 'Title',
      images: [{ desktop: 'desktopUrl', tablet: 'tabletUrl', mobile: 'mobileUrl' }],
      productAnimation: 'animationUrl',
      url: 'productUrl',
      map: {
        showImage: true,
        image: {
          desktop: 'desktopMapUrl',
          tablet: 'tabletMapUrl',
          mobile: 'mobileMapUrl',
          horizontal: 'horizontalMapUrl',
          horizontalSmall: 'horizontalSmallMapUrl',
        },
      },
      highlights: [{ title: 'Highlight 1', url: 'url1' }],
      includes: ['Service 1'],
      priceDetail: {
        fromPrice: 1000,
        fromPriceBeautify: '$1000',
        discountSaved: 100,
        oldPriceBeautify: '$900',
        pricingPercentage: 10,
        pricePerNight: '$200',
        oldPrice: 900,
      },
      tags: [],
      crafterDetail: {
        crafterSentence: 'Crafter sentence',
        crafterName: 'Crafter name',
        crafterAvatar: 'Crafter avatar',
      },
      hasPrivateTour: false,
      hasSoloTraveller: true,
      headLine: 'Headline',
      tagHeadLine: [],
      isLandOnly: false,
      isValid: true,
      extraNights: 2,
      isNew: false,
      isPromoted: true,
      isFlashSales: false,
      fcpFixedPrice: {
        hasFcpFixedPrice: true,
        price: 500,
      },
    };

    render(<Item {...item} />);

    // Check if mobile version elements are rendered
    expect(screen.getByText('Destination in 5 days +')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Highlight 1')).toBeInTheDocument();
    expect(screen.getByText('Service 1')).toBeInTheDocument();
    expect(screen.queryByText('$200')).toBeNull();
    expect(screen.getByText('See trip')).toBeInTheDocument();
  });
});
