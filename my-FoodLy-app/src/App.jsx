import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage"
import LoginPage from "./pages/LoginPage";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";


function App() {

  
  return(
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
