import axios from "axios";
import { baseUrl } from "./../constants";

export const getCategoriesListService = async () => {
  const response = await axios.get(`${baseUrl}/categories`);
  return response.data;
};
