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