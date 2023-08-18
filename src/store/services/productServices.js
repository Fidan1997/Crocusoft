import axios from "axios";
import { baseUrl } from "../../constants";

export const getProductListService = async () => {
  const response = await axios.get(`${baseUrl}/products`);
  return response.data;
};

export const getProductByIdService = async (id) => {
  const response = await axios.get(`${baseUrl}/products/${id}`);
  return response.data;
};
