import React from "react";
import images from "../../constants/images";
import "./Header.css";

const Header = () => (
  <div className="header__main">
    <div className="header__text">
      <h1 className="header__text-coname">MORTAL TIGER</h1>
      <p className="header__text-info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque illum
        doloremque suscipit asperiores dignissimos vero libero sint laborum odit
        expedita magni, tempore nisi molestias voluptate voluptatibus ex
        incidunt iure itaque. Reprehenderit provident mollitia accusamus,
        doloribus cum repellat iusto. A aspernatur sint quo nihil sed nulla
        consequuntur totam vel odit repellendus, veniam ipsa quas dolorum?
        Labore dolores tempore hic sapiente minima?
      </p>
    </div>
    <button className="header__button-play">PLAY</button>
    <button className="header__button-donate">DONATE</button>
    <div className="header__nft">
      <img src={images.NFT}></img>
    </div>
  </div>
);

export default Header;
