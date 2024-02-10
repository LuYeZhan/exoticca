import { useQuery } from "@tanstack/react-query";
import { getData } from ".";

export const useProduct = (searchQuery:string) =>
  useQuery({
    queryKey: ['country', searchQuery],
    queryFn: () => getData(`country/${searchQuery || 'botswana'}`),
  });
