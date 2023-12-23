import React from "react";
import images from "../../constants/images";
import "./Header.css";

const Header = () => (
  <div className="header__main">
    <div className="header__text">
      <h1 className="header__text-coname image">MORTAL TIGER</h1>
      <p className="header__text-info">
        Welcome to Mortal Tiger, where gaming meets a cause! Immerse yourself in
        Muay Thai Unleashed, our thrilling mobile game, and become a guardian of
        big cats worldwide. Roar with us—Mortal Tiger isn't just a game; it's a
        movement for a wilder, safer future. Do charity and get a chance to earn
        more by becoming an esportsman. Change the World with us!
      </p>
    </div>
    <button className="header__button-play btn">PLAY</button>
    <button className="header__button-donate  btn">DONATE</button>
    <div className="header__nft">
      <img src={images.NFT} alt="Tiger NFT"></img>
    </div>
  </div> 
);

export default Header;
