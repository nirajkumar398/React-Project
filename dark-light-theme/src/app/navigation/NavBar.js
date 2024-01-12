import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useTheme } from "../../theme-context";
const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <div className="nav-bar">
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>
        <Link to="/about">AboutUs</Link>
      </div>
      <div className="switch-mode">
        <label>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme == "dark"}
          />
          <span className="slider round"/>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
