import React from "react";
import { Div } from "./HeaderStyle";

function Header() {
  return (
    <Div>
      <div className="Navbar">
        <div className="nav-icon">
          <a href="https://thewitslab.com/">
            <img src="./images/wits-logo.png" alt="wits-logo" />
          </a>
        </div>
        <div className="List">
          <ul>
            <a href="https://thewitslab.com/about">
              <li>
                About Us<i className="fa-solid fa-angle-down"></i>
              </li>
            </a>
            <a href="/">
              <li>Industry</li>
            </a>
            <a href="/">
              <li>
                Services<i className="fa-solid fa-angle-down"></i>
              </li>
            </a>
            <a href="https://thewitslab.com/careers">
              <li>Career</li>
            </a>
          </ul>
        </div>
        <div className="btn">
          <button>Let's Connect</button>
        </div>
      </div>
    </Div>
  );
}

export default Header;
