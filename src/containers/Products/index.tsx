import { useState } from 'react';
import { Container, Card, CardImage, Title, SubTitleWrapper } from './wrappers';
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

  return (
    <>
      <SearchInput onSearch={handleSearch} />
      <Container>
        <Title>Our recommendation to visit {data?.name} and neighboring countries</Title>
        <Card>
          <CardImage src={data?.hero.images.desktop} alt={data?.name} />
            {data?.destinations.featuredMultiMarket.map((item:MultiMarketItem) => (
              <Item key={item.id} {...item} />
            ))}
        </Card>
        <SubTitleWrapper>
          <Title>Multi country vacation packages including {data?.name}</Title>
        </SubTitleWrapper>
        {data?.destinations.multiMarket.map((item:MultiMarketItem) => {
          return (
            <Card>
              <CardImage src={item.images[0].desktop} alt={data?.name} />
                <Item key={item.id} {...item} />
            </Card>
            )}
        )}
      </Container>
    </>
  );
};

export default Products;
