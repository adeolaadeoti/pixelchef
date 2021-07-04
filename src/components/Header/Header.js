import React from "react";
import Navigation from "../Navigation/Navigation";
import style from "./Header.module.scss";

const aboutUrl = require("../../assets/png/about-img.png");
const workUrl = require("../../assets/png/work-bg.png");

const Header = ({ first, second, imgName }) => {
  return (
    <>
      <Navigation />
      <header className={style.header}>
        <div>
          <h1>
            {first}
            <br /> <span>{second}</span>
          </h1>
          <div>
            <img
              src={
                imgName === "about"
                  ? aboutUrl
                  : imgName === "work"
                  ? workUrl
                  : ""
              }
              alt={imgName}
            />
            <span>&nbsp;</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
