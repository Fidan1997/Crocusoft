import axios from "axios";

export const getCategoriesListService = async () => {
  const response = await axios.get("/api/categories");
  return response.data;
};
