import React from "react";
import introBg from "../assets/images/illustration-editor-desktop.svg";
function About() {
  return (
    <div>
      <div className="about_container">
        <div className="about_header">
          <h1> Designed for the future</h1>
        </div>
        <div className="about_contents">
          <div className="about_descriptions">
            <div className="about_description amb">
              <div className="about_description_title">
                <h2>Introducing an extensible editor</h2>
              </div>
              <div className="about_description_text">
                <p>
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embeds such as images, videos, and Markdown. Extensibility
                  with plugins and themes provide easy ways to add functionality
                  or change the looks of a blog.
                </p>
              </div>
            </div>
            <div className="about_description">
              <div className="about_description_title">
                <h2>Robust content management</h2>
              </div>
              <div className="about_description_text">
                <p>
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you’re in full control.
                </p>
              </div>
            </div>
          </div>

          <div className="pattern_circle_wrapper">
            {/* <div className="pattern_image">
              <img src={introBg} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
