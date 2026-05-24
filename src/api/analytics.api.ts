import axios from "axios";

export const getUsersAnalytics = async () => {
  const response = await axios.get("http://localhost:3000/userAnalytics");
  return response.data;
};
