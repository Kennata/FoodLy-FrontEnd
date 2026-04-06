import Logo from "../assets/LogoFoodly.svg";
import HomeIcon from "../assets/HomeIcon.svg"
import SearchIcon from "../assets/SearchIcon.svg"
import FavoritIcon from "../assets/FavoritIcon.svg"
import LogoutIcon from "../assets/LogoutIcon.svg"
import { Link } from "react-router-dom";


export default function Header(){
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <img src={Logo} alt="Logo" />
        <a className="navbar-brand fw-bold ps-2 brand-color" href="#">Foodly</a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item">
              <Link className="nav-link fw-medium d-flex align-items-center gap-2" to="/">
                <img src={HomeIcon} alt="Home" />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium d-flex align-items-center gap-2" to="/search">
                <img src={SearchIcon} alt="SearchIcon" />
                Cari
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium d-flex align-items-center gap-2" href="#">
                <img src={FavoritIcon} alt="Favorit" />
                Favorit
              </a>
            </li>

            <li className="nav-item">
              <a className="btn btn-custom" href="#">+ Buat Resep</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium d-flex align-items-center gap-2" href="#">
                <img src={LogoutIcon} alt="Logout" />
                Keluar
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}