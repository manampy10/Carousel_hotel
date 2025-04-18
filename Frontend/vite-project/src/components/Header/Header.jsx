import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="logo" />
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
