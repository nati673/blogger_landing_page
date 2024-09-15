import React, { useState } from "react";
import menuIcon from "../assets/images/icon-hamburger.svg";
import arrow from "../assets/images/icon-arrow-dark.svg";
import logo from "../assets/images/logo.svg";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="menuHeader">
      <div className="menu-container">
        <div className="header_logo">
          <img src={logo} alt="blogger logo" />
        </div>
        <nav className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li className="dropdown">
              <a href="#">Product</a>
              <img src={arrow} alt="drop-down icon" />

              <ul className="d_content">
                <li>
                  <a href="#">Marketplace</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Integrations</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Company</a>
              <img src={arrow} alt="drop-down icon" />
              <ul className="d_content">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Connect</a>
              <img src={arrow} alt="drop-down icon" />

              <ul className="d_content">
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="auth_btns">
                <a href="#">Login</a>
                <button className="btn mp_signUp_btn btn_h">Sign Up</button>
              </div>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <img src={menuIcon} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Menu;
