import axios from "axios";

export const getProductListService = async () => {
  const response = await axios.get("/api/products");
  return response.data;
};

export const getProductByIdService = async (id) => {
  const response = await axios.get(`/api/products/${id}`);
  return response.data;
};
