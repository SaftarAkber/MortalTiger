import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app_navbar">
      <div className="app_navbar-logo">
        <img src={images.Logo} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>

        <li className="p__opensans">
          <a href="#home">Game </a>
        </li>

        <li className="p__opensans">
          <a href="#home">NFT</a>
        </li>

        <li className="p__opensans">
          <a href="#home">Token</a>
        </li>

        <li className="p__opensans">
          <a href="#home">Roadmap</a>
        </li>

        <li className="p__opensans">
          <a href="#home">Shop</a>
        </li>
        <li className="p__opensans">
          <a href="#home">Faq</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          {" "}
          Connect Wallet
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#home">Game </a>
              </li>

              <li className="p__opensans">
                <a href="#home">NFT</a>
              </li>

              <li className="p__opensans">
                <a href="#home">Token</a>
              </li>

              <li className="p__opensans">
                <a href="#home">Roadmap</a>
              </li>

              <li className="p__opensans">
                <a href="#home">Shop</a>
              </li>
              <li className="p__opensans">
                <a href="#home">Faq</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
