import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdExitToApp } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

async function getAccount(){
  const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
  const account = accounts[0];
  return account;
}
const Navbar = () => {

  const connectClick = () => {
    if (typeof window !== "undefined") {
      getAccount().then(( response ) => {
        console.log(response);
      });
    }
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app_navbar">
      <div className="app__navbar-logo">
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
        <a
          href="#login"
          variant="contained"
          onClick={connectClick}
          className="p__opensans"
        >
          {"Connect Wallet"}
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
            <MdExitToApp
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
