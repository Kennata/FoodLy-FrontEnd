import FoodlyApiClient from "./FoodLyAPIClient";

export const registerUser = async (userData) => {
  const response = await FoodlyApiClient.post("/register", userData);
  return response.data;
};

// Nanti kamu bisa tambah fungsi login di sini juga
export const loginUser = async (credentials) => {
  const response = await FoodlyApiClient.post("/login", credentials);
  return response.data;
};