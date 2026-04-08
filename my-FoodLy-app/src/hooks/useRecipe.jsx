import { useEffect, useState } from "react"
import { getRecipes } from "../services/RecipeService"
import { searchRecipes } from "../services/RecipeService"

export function useRecipe(){

  const formatDate = (dateString) => {
    const date = new Date(dateString)

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  const [recipeTerbaru, setRecipeTerbaru] = useState([])
  const [recipeSearchResult, setRecipeSearchResult] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRecipes()
        setRecipeTerbaru(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  async function searchForRecipes(nameOfRecipe) {
    try {
      const data = await searchRecipes(nameOfRecipe)
      setRecipeSearchResult(data)
    } catch (error) {
      console.error(error)
    }
  }

  return {recipeTerbaru, formatDate, recipeSearchResult, searchForRecipes}
}