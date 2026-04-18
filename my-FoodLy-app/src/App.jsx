import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage";
import MainLayout from "./layouts/MainLayout";
import RecipePage from "./pages/RecipePage"
import DetailRecipePage from "./pages/DetailRecipePage"
import { Routes, Route } from "react-router-dom";


function App() {

  
  return(
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="recipe" element={<RecipePage />} />
        <Route path="detailrecipe" element={<DetailRecipePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
