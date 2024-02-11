import { render, screen } from '@testing-library/react';
import MobilePrices from './';

describe('MobilePrices component', () => {
  it('renders prices correctly', () => {
    const props = {
      pricingPercentage: 20,
      oldPriceBeautify: '$1000',
      fromPriceBeautify: '$800',
      pricePerNight: '$200',
    };

    render(<MobilePrices {...props} />);

    expect(screen.getByText('-20 %')).toBeInTheDocument();
    expect(screen.getByText('$1000')).toBeInTheDocument();
    expect(screen.getByText('$800')).toBeInTheDocument();
    expect(screen.getByText('Per night: $200')).toBeInTheDocument();
  });
});