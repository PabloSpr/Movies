import { Link, Outlet } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";

import "./Header.css";

function Header() {
  return (
    <header className="fondoNav mb-4 pt-2 px-4 text-white">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container justify-content-around">
          <a className="navbar-brand  text-white" href="#">
            Hackflix
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <Link to="/searchbytitle"> Search by title</Link>{" "}
              </li>
              <li className="mx-2">
                <Link to="/searchbyrating"> Search by rating</Link>{" "}
              </li>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="text-center mt-5">
        {" "}
        <h1 className="text-white">¡Tus Películas favoritas!</h1>
        <Outlet />
      </div>
    </header>
  );
}

export default Header;
