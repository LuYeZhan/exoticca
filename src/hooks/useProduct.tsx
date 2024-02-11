import { useQuery } from "@tanstack/react-query";
import { getData } from "../api";
import { Country } from "../types/product.types";

export const useProduct = (searchQuery:string) =>
  useQuery<Country>({
    queryKey: ['country', searchQuery],
    queryFn: () => getData(`country/${searchQuery || 'botswana'}`),
  });