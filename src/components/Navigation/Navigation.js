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

  // if isOpen is true, select the body element
  // and apply a style to make it unscrollable
  // else if isOpen is false, remove the style
  function toggleBodyScroll(isOpen) {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }

  React.useEffect(() => {
    toggleBodyScroll(isOpen);
  }, [isOpen]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="nav"
    >
      <div className="nav-container">
        <motion.div className="background" variants={sidebar} />
        <MobileNavigation />
        <MenuToggle toggle={() => toggleOpen()} toggleState={isOpen} />
      </div>
    </motion.div>
  );
};

export default Navigation;
