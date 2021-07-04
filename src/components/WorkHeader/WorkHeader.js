import React from "react";
import Navigation from "../Navigation/Navigation";
import style from "./WorkHeader.module.scss";

const WorkHeader = () => {
  return (
    <>
      <Navigation />
      <header className={style.header}>
        <h3 className={style.headingOne}>
          <span>Mon Marché –</span> Home delivery <br />
          of fresh fruit and vegetables.
        </h3>
      </header>
    </>
  );
};

export default WorkHeader;
