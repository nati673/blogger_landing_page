import React from "react";
import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/icon-arrow-light.svg";
import Menu from "./Menu";
function Header() {
  return (
    <section className="intro_section">
      <div className="s__intro">
        <header className="header introNavs">
          <div className="header_content">
            <div className="logo_with_links">
              <div className="header_logo">
                <img src={logo} alt="blogger logo" />
              </div>

              <div className="header_links">
                <nav className="navigator">
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
                  </ul>
                </nav>
              </div>
            </div>
            <div className="auth_btns">
              <a href="#">Login</a>
              <button className="btn mp_signUp_btn btn_h">Sign Up</button>
            </div>


          </div>
        </header>
            <Menu />

        <div className="intro_container">
          <div className="_intro_title">
            <h1>A modern publishing platform</h1>
          </div>
          <div className="intro_description">
            <p>Grow your audience and build your online brand</p>
          </div>

          <div className="intro_btns">
            <button className="btn  mp btn_h">Start for Free</button>
            <button className="btn btn_outline mp ">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
