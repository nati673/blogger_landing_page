import React from "react";
import appImage from "../assets/images/illustration-phones.svg";
function App() {
  return (
    <div className="app_container">
      <div className="app_contents">
        <div className="app_image">
          <img src={appImage} alt="" />
        </div>
        <div className="app_info">
          <div className="app_title">
            <h1>State of the Art Infrastructure</h1>
          </div>
          <div className="app_description">
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
