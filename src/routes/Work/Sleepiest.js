import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import WorkHeader from "../../components/WorkHeader/WorkHeader";
import style from "./Works.module.scss";

const Sleepiest = () => {
  return (
    <>
      <WorkHeader />
      <main className="main">
        <section className={style.client}>
          <div className={style.client__left}>
            <h2>What’s this?</h2>
            <p>
              We were asked to create and design an app to make finance managing
              and payments easier for consumers and businesses. A simple and
              fast payment app that had almost no costs to businesses.
            </p>
          </div>
          <div className={style.client__right}>
            <h2>Client</h2>
            <p>Microsoft</p>
            <br />
            <h2>Focus</h2>
            <p>Branding, Product Design, UX Strategy, Interface Design </p>
          </div>
        </section>
        <section className={style.work}>
          <img
            className={style.work_img}
            src={require("../../assets/png/sleepiest-1.png")}
            alt="i"
          />
          <div className={style.workContainer}>
            <img
              className={style.work_img}
              src={require("../../assets/png/sleepiest-2.png")}
              alt="i"
            />
            <img
              className={style.work_img}
              src={require("../../assets/png/sleepiest-3.png")}
              alt="i"
            />
          </div>
        </section>
        <section className={style.next}>
          <div className={style.top}>
            <img
              src={require("../../assets/png/work-emoji.png")}
              alt="work emoji"
            />
            <p>Next project</p>
          </div>
          <div className={style.bottomWrapper}>
            <div className={style.home__bottom}>
              <Link to="/work/ulesson">uLesson</Link>
              <Link to="/work/ulesson">uLesson</Link>
              <Link to="/work/ulesson">uLesson</Link>
              <Link to="/work/ulesson">uLesson</Link>
              <Link to="/work/ulesson">uLesson</Link>
              <Link to="/work/ulesson">uLesson</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sleepiest;
