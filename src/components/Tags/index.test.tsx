import { render, screen } from '@testing-library/react';
import Tags from './';
import { Tag } from '../../types/product.types';

// Mock component for testing purposes
const MockWrapperComponent = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="wrapper-component">{children}</div>;
};

describe('Tags component', () => {
  it('renders tags correctly', () => {
    const tags: Tag[] = [
      { 
        alias: 'tag1',
        description: 'Description for tag 1',
        categoryName: 'Category 1',
        uri: '/tag1',
        tagId: 'tag1-id',
        name: 'Tag 1'
      },
    ];    
    render(<Tags tags={tags} wrapperComponent={MockWrapperComponent} />);

    tags.forEach((tag) => {
      expect(screen.getByText(tag.name)).toBeInTheDocument();
    });
  });

  it('renders tags using the provided wrapper component', () => {
    const tags: Tag[] = [
      { 
        alias: 'tag1',
        description: 'Description for tag 1',
        categoryName: 'Category 1',
        uri: '/tag1',
        tagId: 'tag1-id',
        name: 'Tag 1'
      },
    ];    
    
    render(<Tags tags={tags} wrapperComponent={MockWrapperComponent} />);

    const wrapperElements = screen.getAllByTestId('wrapper-component');
    expect(wrapperElements.length).toBe(tags.length);
  });
});
