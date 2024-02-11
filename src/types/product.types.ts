export type BreadcrumbItem = {
  url: string;
  title: string;
  class: string;
};

export type HeroImages = {
  image: string;
  desktop: string;
  tablet: string;
  mobile: string;
};

export type HeroData = {
  shortDescription: string;
  images: HeroImages;
  priceHeader: string;
  percentageHeader: string;
  isDiscount: boolean;
};

export type PointOfInterest = {
  id: string;
  name: string;
  url: string;
  image: string;
};

export type UsefulInformationItem = {
  class: string;
  name: string;
  text: string;
  position: number;
  isFullWidth: boolean;
};

export type NearbyItem = {
  id: string;
  name: string;
  campaignsAvailable: number;
  image: string;
  url: string;
  fcpFixedPrice: {
      hasFcpFixedPrice: boolean;
      price: number;
  };
};

export type SimilarItem = {
  title: string;
  days: string;
  fromPrice: string;
  fromPriceBeautify: string;
  image: { url: string; text: string }[];
  url: string;
  destination: string;
  isPromotion: boolean;
  id: string;
  hasExtraNights: boolean;
  highlights: { title: string; url: string }[];
  map: {
      showImage: boolean;
      image: {
          desktop: string;
          tablet: string;
          mobile: string;
          horizontal: string;
          horizontalSmall: string;
      };
  };
  isNew: boolean;
  isPromoted: boolean;
  isFlashSales: boolean;
  tagHeadline: { alias: string; name: string; category: string; uri: string; isWinner: boolean; uuid: string }[];
  fcpFixedPrice: { hasFcpFixedPrice: boolean; price: number };
  oldPrice: string;
  pricingPercentage: string;
  discountSaved: string;
};

export type Tag = {
  alias: string;
  name: string;
  description: string;
  categoryName: string;
  uri: string;
  tagId: string;
};

export type HighlightsType = { title: string; url: string };


export type MultiMarketItem = {
  id: number;
  title: string;
  destination: string;
  images: { desktop: string; tablet: string; mobile: string }[];
  productAnimation: any;
  days: number;
  url: string;
  map: {
    showImage: boolean;
    image: {
      desktop: string;
      tablet: string;
      mobile: string;
      horizontal: string;
      horizontalSmall: string;
    };
  };
  highlights: HighlightsType[];
  includes: string[];
  priceDetail: {
    fromPrice: number;
    fromPriceBeautify: string;
    discountSaved: number;
    oldPriceBeautify: string;
    pricingPercentage: number;
    pricePerNight: string;
    oldPrice: number;
  };
  tags: Tag[],
  crafterDetail: {
    crafterSentence: string;
    crafterName: string;
    crafterAvatar: string;
  };
  hasPrivateTour: boolean;
  hasSoloTraveller: boolean;
  headLine: string;
  tagHeadLine: {
    alias: string;
    name: string;
    category: string;
    uri: string;
    isWinner: boolean;
    uuid: string;
  }[];
  isLandOnly: boolean;
  isValid: boolean;
  extraNights: number;
  isNew: boolean;
  isPromoted: boolean;
  isFlashSales: boolean;
  fcpFixedPrice: {
    hasFcpFixedPrice: boolean;
    price: number;
  };
};

export type Destinations = {
  featuredMonoMarket: [],
  featuredMultiMarket: [MultiMarketItem],
  monoMarket: [],
  multiMarket: [MultiMarketItem]
}

export type Metadata = {
  title: string;
  desc: string;
  keywords: string | null;
  OGTitle: string;
  OGDescription: string;
  OGType: string;
  OGSiteName: string;
  OGImage: string;
  OGUrl: string;
  canonicalLink: string;
  OGUri: string;
  alternateLinks: { locale: string; domain: string }[];
};

export type TravelGuide = {
  events: {
    url: string;
    imageUrl: string;
    description: string;
  };
  gastronomy: {
    url: string;
    imageUrl: string;
    description: string;
  };
  shopping: {
    url: string;
    imageUrl: string;
    description: string;
  };
};

export type Country = {
  breadcrumb: BreadcrumbItem[];
  hero: HeroData;
  name: string;
  flag: string;
  type: string;
  id: number;
  slug: string;
  descriptionIcon: string;
  mapUrl: string;
  longDescription: string;
  POIS: {
    title: string;
    cards: PointOfInterest[];
  };
  usefulInformation: {
    country: string;
    items: UsefulInformationItem[];
  };
  nearby: {
    title: string;
    icon: string;
    cards: NearbyItem[];
  };
  similar: SimilarItem[];
  destinations: Destinations;
  metadata: Metadata;
  emptyUsefulInformation: boolean;
  travelGuide: TravelGuide;
  fcpFixedPrice: {
    hasFcpFixedPrice: boolean;
    price: number;
  };
};



  