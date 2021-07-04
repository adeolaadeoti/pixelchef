// import React from 'react';
// import style from './Navigation.module.scss';

// const Navigation = () => {
//     return (
//         <nav className={style.navContainer}>
//             <div className={style.logo}>
//             <img src={require('../../assets/svg/pixelchef-emblem-white.svg')} alt="pixelchef emblem"/>
//             <img src={require('../../assets/svg/pixelchef-text-white.svg')} alt="pixelchef text"/>
//             </div>
//             <div className={style.navIcon}>
//             <p>Menu</p>
//             <div>
//                 <span className={style.bar1}></span>
//                 <span className={style.bar2}></span>
//                 <span className={style.bar3}></span>
//             </div>
//             </div>
//       </nav>
//     );
// }

// export default Navigation;

import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { MobileNavigation } from "./MobileNavigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 98% 4%)`,
    transition: {
      type: "spring",
      stiffness: 200,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(1px at 98% 4%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};
const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className='nav'
    >
      <motion.div className="background" variants={sidebar} />
      <MobileNavigation />
      <MenuToggle toggle={() => toggleOpen()} toggleState={isOpen} />
    </motion.div>
  );
};

export default Navigation;
