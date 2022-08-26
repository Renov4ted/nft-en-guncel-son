import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import LOGO from "../assets/LOGO.png";

export default function Navbar() {
  const [navState, setNavState] = useState(false);

  return (
    <nav
      style={{
        position: "relative",
        zIndex: 4,
        backgroundColor: "#F39CA2",
        paddingRight: 22,
        paddingRight: "44px",
        justifyContent: "flex-end",
        display: "flex",
      }}
    >
      <div className="arkala">
        <img src={LOGO} alt="logo" />
      </div>

      <div className="brand-container">
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul
          style={{
            marginRight: 20,
          }}
          className="links "
        >
          <li style={{}} className="navItem">
            <a
              style={{
                fontSize: 30,
                color: "white",
              }}
              href="https://discord.gg/luckypandas"
              target={"_blank"}
            >
              <FaDiscord />
            </a>
          </li>
          <li style={{}} className="navItem ">
            <a
              style={{
                fontSize: 30,
                color: "white",
              }}
              href="https://twitter.com/AlgoPand"
              target={"_blank"}
            >
              <FaTwitter />
            </a>
          </li>
          <li style={{}} className="navItem">
            <a
              style={{
                fontSize: 30,
                color: "white",
              }}
              href="https://www.instagram.com/algopand/"
              target={"_blank"}
            >
              <FaInstagram />
            </a>
          </li>
          <li />
        </ul>
      </div>
    </nav>
  );
}