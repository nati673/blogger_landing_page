import React from "react";
import logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer_content">
        <div className="footer_links">
          <div className="footer_logo">
            <img src={logo} alt="footer logo" />
          </div>
          <div className="product_links links">
            <ul>
              <li>
                <p>Product</p>
              </li>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Integrations</a></li>
            </ul>
          </div>

          <div className="company_links links">
            <ul>
              <li>
                <p>Company</p>
              </li>
              <li><a href="#">About</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="connect_links links">
            <ul>
              <li>
                <p>Connect</p>
              </li>

              <li><a href="#">Contact</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
