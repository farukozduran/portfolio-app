import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header>
      <h1> Faruk's Portfolio</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <label className="ui-switch">
        <input type="checkbox" onChange={() => setDark(!dark)} />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </header>
  );
}

export default Header;
