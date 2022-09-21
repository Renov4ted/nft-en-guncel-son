import React, { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";
import "./sass/index.scss";
import Footer from "./components/Footer";
import "./sass/components/_footer.scss";
import NavMenu from "./components/NavMenu";
import Enterance from "./components/Enterance";
import Token from "./components/Token";
import Card from "./components/Card";

function App() {
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .releases,
        .like,
        .signup,
        .ScrollToTop,
        .footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  });
  return (
    <div className="app-container">
      <NavMenu />
      <ScrollToTop />
      <Navbar />
      <Home />
      <Enterance />
      <Card/>
      <Release />
      <Token />
      <Footer />
    </div>
  );
}

export default App;
