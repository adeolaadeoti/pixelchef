import React, { useRef } from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  const constraintsRef = useRef(null);

  return (
    <footer className={style.footer}>
      <div className={style.footer__wrapper}>
        <div className={style.footer__contentWrapper}>
          <div className={style.footer__top}>
            <h1>
              Think we can create
              <br />
              magic together?
            </h1>
            <Link to="/contact">
              Let’s get started{" "}
              <img
                src={require("../../assets/svg/right-arrow.svg")}
                alt="right arrow"
              />{" "}
            </Link>
          </div>
          <div className={style.footer__bottom}>
            <address>
              <h2>Contact</h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:work@pixelchef.ng"
              >
                work@pixelchef.ng
              </a>
              <p>
                Paradise Estate 2,
                <br />
                Chevron drive,
                <br />
                Lekki, Lagos.
              </p>
            </address>
            <div className={style.footer__connected}>
              <h2>Keep connected</h2>
              <div className={style.footer__socials}>
                <div>
                  <a
                    href="http://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    href="http://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dribbble
                  </a>
                  <a
                    href="http://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </div>
                <div>
                  <a
                    href="http://behance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Behance
                  </a>
                  <a
                    href="http://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    href="http://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer__dragWrapper}>
          <motion.div className={style.dragArea} ref={constraintsRef}>
            <motion.img
              drag
              dragConstraints={constraintsRef}
              src={require("../../assets/svg/pixelDrag-2.svg")}
              alt="pixel chef drag"
            />
            <motion.img
              drag
              dragConstraints={constraintsRef}
              src={require("../../assets/svg/pixelDrag-3.svg")}
              alt="pixel chef drag"
            />
            <motion.img
              drag
              dragConstraints={constraintsRef}
              src={require("../../assets/svg/pixelDrag-1.svg")}
              alt="pixel chef drag"
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
