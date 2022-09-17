import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <a class="home-link" href="#" rel="home">
          Home
        </a>
        <div className="main-nav-list">
          <ul class="main-nav-list">
            <li>
              <a class="main-nav-link" href="#">
                About
              </a>
            </li>
            <li>
              <a class="main-nav-link" href="#">
                Projects
              </a>
            </li>
            <li>
              <a class="main-nav-link" href="#">
                Socials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
