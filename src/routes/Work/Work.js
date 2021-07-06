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
            <Link to="/work/ulesson" className={style.box}>
              <div>
                <img
                  src={require("../../assets/png/uLesson.png")}
                  alt="uLesson"
                />
                <span>Branding</span>
              </div>
              <h3 className={style.about__h3}>
                ULesson -<span>Online platform for distance learning.</span>
              </h3>
            </Link>
            <Link to="/work/sleepiest" className={style.box}>
              <div>
                <img
                  src={require("../../assets/png/sleepiest.png")}
                  alt="sleepiest"
                />
                <span>UI/UX</span>
              </div>
              <h3 className={style.about__h3}>
                Sleepiest –<br />
                <span>Sleep app helps millions fall asleep every night.</span>
              </h3>
            </Link>
            <Link to="/work/monmarche" className={style.box}>
              <div>
                <img
                  src={require("../../assets/png/monMarche.png")}
                  alt="mon mache"
                />
                <span>Packaging</span>
              </div>
              <h3 className={style.about__h3}>
                Mon Marché – <br />
                <span>Home delivery of fresh fruit and vegetables</span>
              </h3>
            </Link>
            <Link to="/work" className={style.box}>
              <div>
                <img
                  src={require("../../assets/png/puntoPago.png")}
                  alt="puntoPago"
                />
                <span>UI/UX</span>
              </div>
              <h3 className={style.about__h3}>
                Punto Pago – <br />
                <span>Panama’s first online service for paying bills</span>
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
