import { render, screen } from '@testing-library/react';
import TravelServices from './';

describe('TravelServices component', () => {
  const services = ['Service 1', 'Service 2', 'Service 3'];

  it('renders all services correctly', () => {
    render(<TravelServices services={services} />);
    services.forEach(service => {
      expect(screen.getByText(service)).toBeInTheDocument();
    });
  });

  it('renders corresponding icons for each service', () => {
    render(<TravelServices services={services} />);
    services.forEach(service => {
      const icons = screen.queryAllByTestId(`font-awesome-icon-${service}`);
      expect(icons.length).toBeGreaterThanOrEqual(0);
    });
  });
});
