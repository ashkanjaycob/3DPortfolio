/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { styles } from "../Styles";
import { staggerContainer } from "../utils/motion";

function SectionWrapper(Component, idName) {
  function HOC() {
    return (
      <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once : true , amount : 0.25}}
      className={`${styles.padding} max-w7xl mx-auto relative z-0`}>
        
        <span className="hash-span" id={idName}> 
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  }
  return HOC;
}

export default SectionWrapper;
