import { render, screen } from '@testing-library/react';
import Highlights from './';

describe('Highlights component', () => {
  it('renders highlights correctly', () => {
    const highlights = [
      { title: 'Highlight 1', url: 'url1' },
      { title: 'Highlight 2', url: 'url2' },
      { title: 'Highlight 3', url: 'url3' },
      { title: 'Highlight 4', url: 'url4' },
      { title: 'Highlight 5', url: 'url5' },
      { title: 'Highlight 6', url: 'url6' },
    ];

    render(<Highlights highlights={highlights} />);

    // Check if the first 4 highlights are rendered
    expect(screen.getByText('Highlight 1')).toBeInTheDocument();
    expect(screen.getByText('Highlight 2')).toBeInTheDocument();
    expect(screen.getByText('Highlight 3')).toBeInTheDocument();
    expect(screen.getByText('Highlight 4')).toBeInTheDocument();

    // Check if the 5th highlight is not rendered
    expect(screen.queryByText('Highlight 5')).toBeNull();

    // Check if the "+x more" message is rendered
    expect(screen.getByText('+2 more')).toBeInTheDocument();
  });

  it('renders highlights without additional highlights', () => {
    const highlights = [
      { title: 'Highlight 1', url: 'url1' },
      { title: 'Highlight 2', url: 'url2' },
      { title: 'Highlight 3', url: 'url3' },
      { title: 'Highlight 4', url: 'url4' },
    ];

    render(<Highlights highlights={highlights} />);

    // Check if all highlights are rendered
    expect(screen.getByText('Highlight 1')).toBeInTheDocument();
    expect(screen.getByText('Highlight 2')).toBeInTheDocument();
    expect(screen.getByText('Highlight 3')).toBeInTheDocument();
    expect(screen.getByText('Highlight 4')).toBeInTheDocument();

    // Check if the "+x more" message is not rendered
    expect(screen.queryByText('+2 more')).toBeNull();
  });
});
