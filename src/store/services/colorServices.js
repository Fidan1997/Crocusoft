import axios from "axios";

export const getColorListService = async () => {
  const response = await axios.get("/api/colors");
  return response.data;
};
