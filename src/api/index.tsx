import { fetchData } from "../helpers/fetchData";

export const getData = async (url:string) => {
  try {
    const response = await fetchData(url);
    return response.data; 
  } catch (error) {
    console.error(`Error fetching ${url}`, error);
    throw error;
  }
};