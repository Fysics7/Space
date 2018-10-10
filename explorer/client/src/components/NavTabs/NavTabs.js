import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/explorer"
        className={
          window.location.pathname === "/explorer" ? "nav-link active" : "nav-link"
        }
      >
       Explorer 
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/galaxy"
        className={
          window.location.pathname === "/galaxy" ? "nav-link active" : "nav-link"
        }
      >
        Galaxy
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/game"
        className={
          window.location.pathname === "/game" ? "nav-link active" : "nav-link"
        }
      >
        Game
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/ships"
        className={
          window.location.pathname === "/ships" ? "nav-link active" : "nav-link"
        }
      >
        Ships
      </Link>
    </li>
  </ul>
);

export default NavTabs;