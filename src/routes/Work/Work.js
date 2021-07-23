import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./Work.module.scss";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

const Work = () => {
  return (
    <>
      <nav className={style.navContainer}>
        <Link to="/">
          <div className={style.logo}>
            <img
              src={require("../../assets/svg/pixelchef-emblem-white.svg")}
              alt="pixelchef emblem"
            />
            <img
              src={require("../../assets/svg/pixelchef-text-white.svg")}
              alt="pixelchef text"
            />
          </div>
        </Link>
        <Navigation />
      </nav>
      <Header first={"An agency for"} second={"the detailed"} imgName="work" />
      <main>
        <section className={style.about__work}>
          <div className={style.about__text}>
            <p>
              We have been working on a variety of projects and across different
              industries and disciplines, making our work an appropriate,
              versatile and functional response to the unique needs of our
              clients.
            </p>
          </div>
          <div className={style.about__workWrapper}>
            <Link to="/work" className={style.box}>
              <div>
                <img
                  src={require("../../assets/png/plapus.png")}
                  alt="Plapus"
                />
                <span>UI / UX</span>
              </div>
              <h3>
                <span>Plapus –</span> Coming Soon
              </h3>
            </Link>
            <Link to="/work" className={style.box}>
              <div>
                <img
                  src={require("../../assets/png/oredoo.png")}
                  alt="oredoo"
                />
                <span>Branding</span>
              </div>
              <h3>
                <span>Oredoo –</span> Coming Soon
              </h3>
            </Link>
            <Link to="/work" className={style.box}>
              <div>
                <img
                  src={require("../../assets/png/homewey.png")}
                  alt="homewey"
                />
                <span>Branding</span>
              </div>
              <h3>
                <span>Homewey –</span> Coming Soon
              </h3>
            </Link>
            <Link to="/work" className={style.box}>
              <div>
                <img
                  src={require("../../assets/png/heatrow.png")}
                  alt="heatrow"
                />
                <span>Website</span>
              </div>
              <h3>
                <span>Heatrow –</span> Coming Soon
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Work;
