import { Link, Outlet } from "react-router-dom";

import "./Header.css";
import Menu from "./Menu";

function Header() {
  return (
    <header className="fondoNav mb-4 py-5 px-4 text-white ">
      <Menu />

      <div className="text-center mt-5">
        {" "}
        <h1 className="text-white">¡Your favorite movies!</h1>
      </div>
    </header>
  );
}

export default Header;
