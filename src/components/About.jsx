/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Tilt} from 'react-tilt'
// import {Tilt} from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../Styles'
import { services } from '../constants'
import { fadeIn , textVariant } from '../utils/motion'
import { SectionWrapper } from '../HOC'

const options={
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on ente         true,    // If the tilt effect has to be reset on 
};
const ServiceCard = ({service}) => {
  return (
    <Tilt className='sx:w-[250px]' options={options}>
        <motion.div variants={fadeIn("right" , "spring" , (0.5*service.index) , 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[8px] shadow-card'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] w-[250px] flex justify-evenly items-center flex-col'
            >
              <img src={service.icon} alt={service.title} className='w-16 h-16 object-contain'/>
              <h3 className='text-white text-[20px] font-bold text-center'>{service.title}</h3>
            </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText}`}>overview .</h2>
    </motion.div>
    <motion.p variants={fadeIn("" , "" , 0.1 , 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ullam! Rem optio eos, modi eius incidunt voluptas facilis. Fugiat quia officiis, sit et nulla libero!</p>
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10 justify-center'>
      {services.map( (service , index) => 
      <ServiceCard service={service}  key={index}/> )}

    </div>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper( About, "about")