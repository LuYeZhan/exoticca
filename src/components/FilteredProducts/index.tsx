import { ChangeEvent } from "react";
import { Card, CardImage } from "../../containers/Products/wrappers";
import { Country, MultiMarketItem } from "../../types/product.types";
import Item from "../Item";
import { CustomFilterInput } from "./wrappers";
import { Label } from "../../constants/labels";

type FilteredProductsProps = {
  filteredData: MultiMarketItem[];
  handleFilter: (event: ChangeEvent<HTMLInputElement>) => void;
  data: Country | undefined
};

const FilteredProducts = ({ filteredData, handleFilter, data }:FilteredProductsProps) => (
  <>
    <CustomFilterInput type="text" onChange={handleFilter} placeholder={`Filter by anything on the country ${data?.name}`} />
    <h3>{Label.filteredProducts1}</h3>
    {filteredData.length === 0 ? (
      <p>{Label.filteredProductsErrorMessage}</p>
    ) : (
      filteredData.map((item: MultiMarketItem) => (
        <Card key={item.id}>
          <CardImage src={item.images[0].desktop} alt={data?.name} />
          <Item key={item.id} {...item} />
        </Card>
      ))
    )}
  </>
);

export default FilteredProducts;