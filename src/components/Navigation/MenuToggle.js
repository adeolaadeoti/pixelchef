import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path fill="transparent" strokeWidth="1.5" stroke="#fff" {...props} />
);

export const MenuToggle = ({ toggle, toggleState }) => (
  <button className="button" onClick={toggle}>
    {toggleState === true ? <span>CLOSE</span> : <span>MENU</span>}
    <svg width="57" height="20" viewBox="0 0 26 20">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 57 2.5" },
          open: { d: "M 1 14.5 L 57 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 57 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 27 16.346" },
          open: { d: "M 1 5 L 57 18.346" },
        }}
      />
    </svg>
  </button>
);
