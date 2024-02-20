/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { motion } from "framer-motion";
import { styles } from "../Styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../HOC";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
  contentStyle={{ background: "#1d1836", color: "#fff" }}
  contentArrowStyle={{
    border: "7px solid #232631",
  }}
  date={experience.date}
  iconStyle={{background : experience.iconBg}}
  icon={
    <div>
      <img src={experience.icon} alt={experience.company_name}
      className="w-[100%] h-[100%] object-contain"/>
    </div>
  }
>
    <div className="text-white text-[24px] font-bold"> 
      <h3>{experience.title}</h3>
      <p className="text-secondary text-[16px]
      font-semibold " style={{margin:0}}>{experience.company_name}</p>
    </div>

    <ul className="mt-20 list-disc ml-5 space-y-2">
        {experience.points.map( (point , index) => (
          <li key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ) )}
    </ul>

</VerticalTimelineElement>
);
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Experience .</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline> 
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Experience, "work");
