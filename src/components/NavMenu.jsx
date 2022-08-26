import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function NavMenu() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        backgroundColor: "#F39CA2",
      }}
      class="hamburger-menu"
    >
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span property="menu toggle button"></span>
      </label>

      <ul class="menu__box">
        <li>
          <a class="menu__item" href="#">
            Home
          </a>
        </li>
        <li>
          <a
            class="menu__item"
            href="https://www.nftexplorer.app/collection/fv-tLxccITil"
            target={"_blank"}
          >
            View All Collection{" "}
          </a>
        </li>
        <li>
          <a class="menu__item" href="#TokenId">
            Token
          </a>
        </li>
        <li>
          <a class="menu__item" href="#roadmap">
            RoadMap
          </a>
        </li>
        <li>
          <a class="menu__item" href="#team">
            Team
          </a>
        </li>
        <div className="responsive_Style">
          <li>
            <a
              class="responsive_menu2"
              href="https://discord.gg/luckypandas"
              target={"_blank"}
            >
              <FaDiscord />
            </a>
          </li>
          <li>
            <a
              class="responsive_menu3"
              href="https://www.instagram.com/algopand/"
              target={"_blank"}
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              class="responsive_menu"
              href="https://twitter.com/AlgoPand"
              target={"_blank"}
            >
              <FaTwitter />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default NavMenu;
