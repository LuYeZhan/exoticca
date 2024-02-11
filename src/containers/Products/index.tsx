import { useState } from 'react';
import { Container, Card, CardImage, Title, SubTitleWrapper } from './wrappers';
import SearchInput from '../../components/SearchInput';
import { useProduct } from '../../hooks/useProduct';
import Item from '../../components/Item';
import { MultiMarketItem } from '../../types/product.types';
import { Label } from '../../constants/labels';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("botswana");
  const { data, isLoading, isError } = useProduct(searchQuery);

  const handleSearch = (input: string) => {
    setSearchQuery(input);
  };

  if (isLoading) {
    return <p>{Label.errorLoadingMessage}</p>;
  }

  if (isError) {
    return <p>{Label.errorLoadingProducts}</p>;
  }

  return (
    <>
      <SearchInput onSearch={handleSearch} />
      <Container>
        <Title>{Label.productsTitle1} {data?.name} {Label.productsTitle2}</Title>
        <Card>
          <CardImage src={data?.hero.images.desktop} alt={data?.name} />
            {data?.destinations.featuredMultiMarket.map((item:MultiMarketItem) => (
              <Item key={item.id} {...item} />
            ))}
        </Card>
        <SubTitleWrapper>
          <Title>{Label.productsTitle3} {data?.name}</Title>
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
