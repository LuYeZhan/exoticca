import { useState } from 'react';
import { Container, Card, CardContent, CardImage } from './wrappers';
import SearchInput from '../../components/SearchInput';
import { useProduct } from '../../api/useProduct';
import { MultiMarketItem } from '../../types/product.types';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("botswana");
  const { data, isLoading, isError } = useProduct(searchQuery);

  const handleSearch = (input: string) => {
    setSearchQuery(input);
  };

  const renderItems = (items: MultiMarketItem[]) => {
    return items.map((item) => (
      <div key={item.id}>
        <p>{item.destination} in {item.days} days</p>
        <p>{item.title}</p>
        {renderHighlights(item.highlights)}
        {renderIncludes(item.includes)}
      </div>
    ));
  };

  const renderHighlights = (highlights:{ title: string; url: string }[]) => {
    return highlights.map((highlight, index) => (
      <p key={index}>{highlight.title}</p>
    ));
  };

  const renderIncludes = (includes:string[]) => {
    return includes.map((include, index) => (
      <p key={index}>{include}</p>
    ));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading products</p>;
  }

  const country = data;

  return (
    <>
      <SearchInput onSearch={handleSearch} />
      <Container>
        <Card>
          <CardImage src={country.hero.images.desktop} alt={country.name} />
          <CardContent>
            {renderItems(country.destinations.featuredMultiMarket)}
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Products;
