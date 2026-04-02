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
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <label class="ui-switch">
        <input type="checkbox" onChange={() => setDark(!dark)} />
        <div class="slider">
          <div class="circle"></div>
        </div>
      </label>
    </header>
  );
}

export default Header;
