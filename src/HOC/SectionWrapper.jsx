/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { styles } from "../Styles";
import { staggerContainer } from "../utils/motion";

function SectionWrapper(Component, idName) {
  function HOC() {
    return (
      <motion.section id={idName}>
        <Component />
      </motion.section>
    );
  }
  return HOC;
}

export default SectionWrapper;
