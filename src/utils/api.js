import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res);
const api_base_url = import.meta.env.VITE_BASE_API_URL;

export function getFoods() {
  const { data, error, isLoading } = useSWR(`${api_base_url}/foods`, fetcher);

  return {
    foods: data?.data,
    isLoading,
    isError: error,
  };
}

export function addFood(data) {
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const res = axios.post(`${api_base_url}/foods`, data, config);

  return res;
}

export function addTrasaction(data) {
  const res = axios.post(`${api_base_url}/transactions`, data);
  return res;
}
