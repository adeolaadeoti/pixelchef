import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import style from "./Home.module.scss";
import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <nav className={style.navContainer}>
        <Link to="/">
          <div className={style.logo}>
            <img
              src={require("../../assets/svg/pixelchef-emblem.svg")}
              alt="pixelchef emblem"
            />
            <img
              src={require("../../assets/svg/pixelchef-text.svg")}
              alt="pixelchef text"
            />
          </div>
        </Link>
        <Navigation />
      </nav>
      <header className={style.header}>
        <div className={style.header__hero}>
          <p>
            Hello there
            <img
              src={require("../../assets/png/hello-emoji.png")}
              alt="hello emoji"
            />
          </p>
          <h1>
            We are a creative <br />
            agency for{" "}
            <span>
              ambitious <br />
              business.
            </span>
          </h1>
        </div>
        <div className={style.header__img}>
          <div className={style.box1}>
            <div className={style.innerBox}>
              <img src={require("../../assets/png/header-1.png")} alt="" />
            </div>
            <Link className={style.innerBox} to="/work">
              <img src={require("../../assets/png/header-2.png")} alt="" />
            </Link>
            <div className={style.innerBox__3}></div>
          </div>
          <div className={style.box2}>
            <div className={style.innerBox__1}></div>
            <Link className={style.innerBox} to="/work">
              <img src={require("../../assets/png/header-3.png")} alt="" />
            </Link>
            <div className={style.innerBox}>
              <img src={require("../../assets/png/header-4.png")} alt="" />
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section className={style.home__work}>
          <div className={style.home__text}>
            <p>
              We work with an extensive range of clients, from independent
              start-ups to established multi-national corporations, and our
              studio of dedicated creatives always welcome new projects and
              challenges.
            </p>
          </div>
          <div className={style.home__workWrapper}>
            <Link to="/work" className={style.box}>
              <div>
                <img
                  src={require("../../assets/png/uLesson.png")}
                  alt="uLesson"
                />{" "}
                <span>Branding</span>{" "}
              </div>
              <h3>
                <span>uLesson –</span> Online platform <br />
                for distance learning.
              </h3>
            </Link>
            <Link to="/work" className={style.box}>
              <div>
                <img
                  src={require("../../assets/png/sleepiest.png")}
                  alt="uLesson"
                />{" "}
                <span>UI/UX</span>{" "}
              </div>
              <h3>
                <span>Sleepiest –</span> Sleep app helps <br />
                millions fall asleep every night.
              </h3>
            </Link>
            <Link to="/work" className={style.box}>
              <div>
                <img
                  src={require("../../assets/png/monMarche.png")}
                  alt="uLesson"
                />{" "}
                <span>Packaging</span>{" "}
              </div>
              <h3>
                <span>Mon Marché –</span> Home delivery <br />
                of fresh fruit and vegetables.
              </h3>
            </Link>
            <Link to="/work" className={style.box}>
              <div>
                <img
                  src={require("../../assets/png/puntoPago.png")}
                  alt="uLesson"
                />{" "}
                <span>UI/UX</span>{" "}
              </div>
              <h3>
                <span>Punto Pago –</span> Panama’s first <br />
                online service for paying bills.
              </h3>
            </Link>
          </div>
        </section>
        <section className={style.next}>
          <div className={style.top}>
            <img
              src={require("../../assets/png/work-emoji.png")}
              alt="work emoji"
            />
            <p>Imagination is our currency</p>
          </div>
          <div className={style.bottomWrapper}>
            <div className={style.home__bottom}>
              <div className={style.home__bottomWrapper}>
                <Link to="/work">see the work</Link>
                <Link to="/work">see the work</Link>
                <Link to="/work">see the work</Link>
                <Link to="/work">see the work</Link>
                <Link to="/work">see the work</Link>
                <Link to="/work">see the work</Link>
                <Link to="/work">see the work</Link>
                <Link to="/work">see the work</Link>
                <Link to="/work">see the work</Link>
                <Link to="/work">see the work</Link>
                <Link to="/work">see the work</Link>
                <Link to="/work">see the work</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
