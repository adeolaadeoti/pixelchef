import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: 'block',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      delay: 0.5,
    },
  },
  closed: {
    y: 50,
    display: 'none',
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = () => {
  return (
    <motion.div variants={variants}>
      <h3 className="menu-top">
        Learn more <Link to="/about">about us,</Link> check out{" "}
        <Link to="/work">our work,</Link> and you can also{" "}
        <Link to="/contact">contact us.</Link>
      </h3>
      <h5 className="menu-bottom">Keep connected</h5>
      <div className="socials">
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.twitter.com">Twitter</a>
        <a href="https://www.instagram.com">Instagram</a>
      </div>
    </motion.div>
  );
};
