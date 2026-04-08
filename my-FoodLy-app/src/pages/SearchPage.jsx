import { useState } from "react";
import WhiteSearchIcon from "../assets/WhiteSearchIcon.svg"
import FilterIcon from "../assets/FilterIcon.svg"
import { useRecipe } from "../hooks/useRecipe";
import FoodCard from "../components/FoodCard"


export default function SearchPage(){

  const {recipeSearchResult, searchForRecipes, formatDate} = useRecipe()

  const [search, setSearch] = useState("");
  return(
    <>
      <div className="bg-custom-color min-vh-100">
        <div className="container-fluid pt-4">
          <div className="row">
            <div className="col d-flex align-items-center gap-2">
              <h2 className="fw-bold m-0 mb-4">Cari Resep</h2>
            </div>
          </div>

          <div className="row bg-white p-4 rounded shadow-sm mx-1">
            <div className="col-12 d-flex gap-2">
              <div className="input-group">

                <input 
                  type="text"
                  className="form-control bg-search-bar-color border-0"
                  placeholder="Cari resep..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

              </div>

              <button className="btn btn-custom d-flex align-items-center gap-3">
                  <img src={WhiteSearchIcon} alt="search" />
                  <p className="m-0" onClick={() => searchForRecipes(search)}>Cari</p>
              </button>
            </div>

            <div className="col d-flex align-items-center gap-2 mt-3">
              <img src={FilterIcon} alt="filter" />
              <p className="font-custom-color m-0 fw-medium">Filter:</p>

              <div className="dropdown">
                <button 
                  className="btn bg-search-bar-color dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Kategori
                </button>

                <ul className="dropdown-menu">
                  <li><button className="dropdown-item">Tanggal</button></li>
                  <li><button className="dropdown-item">Kalori</button></li>
                  <li><button className="dropdown-item">Like</button></li>
                </ul>
              </div>

              <div className="dropdown">
                <button 
                  className="btn bg-search-bar-color dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Urutan
                </button>

                <ul className="dropdown-menu">
                  <li><button className="dropdown-item">Descending</button></li>
                  <li><button className="dropdown-item">Ascending</button></li>
                </ul>
              </div>

            </div>
          </div>

          <div className="row mt-0 gy-3">
            {
              recipeSearchResult.map(recipe => (
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
    </>
  )
}