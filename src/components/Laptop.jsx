import React from "react";

function Laptop() {
  return (
    <div>
      <div className="laptop_container">
        <div className="laptop_contents">
          <div className="pattern_circle_wrapper_laptop">
            {/* <div className="pattern_image">
              <img src={introBg} alt="" />
            </div> */}
          </div>
          <div className="laptop_descriptions">
            <div className="laptop_description amb">
              <div className="laptop_description_title">
                <h2>Free, open, simple</h2>
              </div>
              <div className="laptop_description_text">
                <p>
                  Blogr is a free and open source application backed by a large
                  community of helpful developers. It supports features such as
                  code syntax highlighting, RSS feeds, social media integration,
                  third-party commenting tools, and works seamlessly with Google
                  Analytics. The architecture is clean and is relatively easy to
                  learn.
                </p>
              </div>
            </div>
            <div className="laptop_description">
              <div className="laptop_description_title">
                <h2>Powerful tooling</h2>
              </div>
              <div className="laptop_description_text">
                <p>
                  Batteries included. We built a simple and straightforward CLI
                  tool that makes customization and deployment a breeze, but
                  capable of producing even the most complicated sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laptop;
