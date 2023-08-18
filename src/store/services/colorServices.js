import axios from "axios";
import { baseUrl } from "../../constants";

export const getColorListService = async () => {
  const response = await axios.get(`${baseUrl}/colors`);
  return response.data;
};
