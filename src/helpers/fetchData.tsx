import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const fetchData = (url:string) => {
  return axios.get(`${baseURL}/${url}`);
};