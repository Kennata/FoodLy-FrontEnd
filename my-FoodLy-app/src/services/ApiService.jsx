import FoodlyApiClient from "./FoodLyAPIClient"

export const getRecipes = async () => {
  const response = await FoodlyApiClient.get("/recipes")
  return response.data.data
}

export const searchRecipes = async (name) => {
  const response = await FoodlyApiClient.get("/recipes", {
    params: {
      search: name
    }
  })
  return response.data.data
}

export const getTopRecipes = async () => {
  const response = await FoodlyApiClient.get("/recipes/top/best")
  return response.data
}

export const registerUser = async (userData) => {
    // Karena sudah pakai FoodlyApiClient, base URL sudah otomatis terisi
    const response = await FoodlyApiClient.post("/register", userData);
    return response.data;
}