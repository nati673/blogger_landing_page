import React from "react";
import IntroPage from "../../components/Header";
import About from "../../components/About";
import App from "../../components/App";
import Laptop from "../../components/Laptop";
import Footer from "../../components/Footer";
function Landing() {
  return (
    <div>
      <IntroPage />
      <About />
      <App />
      <Laptop />
      <Footer />
    </div>
  );
}

export default Landing;
