import { ChangeEvent, useState } from 'react';
import { Container, Card, CardImage, Title, SubTitleWrapper } from './wrappers';
import SearchInput from '../../components/SearchInput';
import { useProduct } from '../../hooks/useProduct';
import Item from '../../components/Item';
import { MultiMarketItem } from '../../types/product.types';
import { Label } from '../../constants/labels';
import FilteredProducts from '../../components/FilteredProducts';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("botswana");
  const { data, isLoading, isError } = useProduct(searchQuery);
  const [filter, setFilter] = useState('');

  const handleSearch = (input: string) => {
    setSearchQuery(input);
  };

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  if (isLoading) {
    return <p>{Label.errorLoadingMessage}</p>;
  }

  if (isError) {
    return <p>{Label.errorLoadingProducts}</p>;
  }

  const allData = [
    ...(data?.destinations?.featuredMultiMarket ?? []),
    ...(data?.destinations?.multiMarket ?? [])
  ];

  const filteredData = allData.filter((item: MultiMarketItem) =>
  JSON.stringify(item).toLowerCase().includes(filter.toLowerCase())
);

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
            <Card key={item.id} >
              <CardImage src={item.images[0].desktop} alt={data?.name} />
                <Item {...item} />
            </Card>
            )}
        )}
        <FilteredProducts filteredData={filteredData} handleFilter={handleFilter} data={data} />
      </Container>
    </>
  );
};

export default Products;
