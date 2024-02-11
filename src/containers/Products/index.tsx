import { useState } from 'react';
import { Container, Card, CardContent, CardImage } from './wrappers';
import SearchInput from '../../components/SearchInput';
import { useProduct } from '../../api/useProduct';
import Item from '../../components/Item';
import { MultiMarketItem } from '../../types/product.types';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("botswana");
  const { data, isLoading, isError } = useProduct(searchQuery);

  const handleSearch = (input: string) => {
    setSearchQuery(input);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading products</p>;
  }

  console.log(data);

  return (
    <>
      <SearchInput onSearch={handleSearch} />
      <Container>
        <h2>Our recommendation to visit {data?.name} and neighboring countries</h2>
        <Card>
          <CardImage src={data?.hero.images.desktop} alt={data?.name} />
          <CardContent>
            {data?.destinations.featuredMultiMarket.map((item:MultiMarketItem) => (
              <Item key={item.id} {...item} />
            ))}
          </CardContent>
        </Card>
        <h2>Multi country vacation packages including {data?.name}</h2>
        {data?.destinations.multiMarket.map((item:MultiMarketItem) => {
          return (
            <Card>
              <CardImage src={item.images[0].desktop} alt={data?.name} />
              <CardContent>
                <Item key={item.id} {...item} />
              </CardContent>
            </Card>
            )}
        )}
      </Container>
    </>
  );
};

export default Products;
