import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { Routes, Route } from "react-router-dom";


function App() {
  return(
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
    
    
  )
}

export default App
