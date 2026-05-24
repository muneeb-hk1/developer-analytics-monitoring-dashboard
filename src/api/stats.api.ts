import axios from "axios";

export const getStats = async () => {
  const response = await axios.get("http://localhost:3000/stats");
  return response.data;
};
