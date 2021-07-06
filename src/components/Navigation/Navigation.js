import * as React from "react";
import { motion, useCycle } from "framer-motion";
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

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className='nav'
    >
      <motion.div className="background" variants={sidebar} />
      <MobileNavigation />
      <MenuToggle toggle={() => toggleOpen()} toggleState={isOpen} />
    </motion.div>
  );
};

export default Navigation;
