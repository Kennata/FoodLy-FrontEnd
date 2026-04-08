import WelcomingIcon from "../assets/WelcomingIcon.svg"
import FoodCard from "../components/FoodCard"
import { useEffect, useState } from "react"
import { getRecipes } from "../services/RecipeService"
import { useRecipe } from "../hooks/useRecipe"

export default function HomePage() {

  const {recipeTerbaru, formatDate} = useRecipe()

  return(
    <>
      <div className="bg-custom-color min-vh-100">
        <div className="container-fluid pt-4">
          <div className="row">
            <div className="col d-flex align-items-center gap-2">
              <img src= {WelcomingIcon} alt="welcome" />
              <p className="h3 m-0 fw-bold">Happy Cooking, faisalwp!</p>
            </div>

            <div className="row mt-2">
              <div className="col">
                <p className="font-custom-color">Temukan resep favorit dan mulai memasak hari ini</p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <p className="h5 fw-bold">Recipe of the Week</p>
                <p className="font-custom-color mt-4 mb-0">5 resep terbaik berdasarkan jumlah like dalam 7 hari terakhir</p>
              </div>
            </div>

            <div className="row mt-0 gy-3 row-cols-3">
              <div className="col">
                <FoodCard></FoodCard>
              </div>

              <div className="col">
                <FoodCard></FoodCard>
              </div>

              <div className="col">
                <FoodCard></FoodCard>
              </div>

              <div className="col">
                <FoodCard></FoodCard>
              </div>

              <div className="col">
                <FoodCard></FoodCard>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p className="h3 fw-bold mt-5">Resep Terbaru</p>
              </div>
            </div>

            <div className="row mt-0 gy-3">
              {
                recipeTerbaru.map(recipe => (
                  <div className="col-4" key={recipe.id}>

                    <FoodCard
                      name={recipe.title}
                      userName={recipe.user.name}
                      calCount={recipe.calories}
                      likeCount={recipe.likes_count}
                      date={formatDate(recipe.created_at)}

                    />
                  </div>
                ))
              }

              

            </div>
          </div>
        </div>
      </div>
    </>
  )
}