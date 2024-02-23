/* eslint-disable react-refresh/only-export-components */
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'
import { styles } from "../Styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../HOC";
import { slideIn } from "../utils/motion";
// import { services } from "../constants";


const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isloading, setIsloading] = useState(false);

  const handleCahnge = (event) => {
    const { name , value } = event.target;
    setForm({...form,[name]:value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsloading(true);

    emailjs.send('service_iuxg1wd'
     , 'template_u1epljd' , 
     {
      from_name : form.name ,
      to_name : "Ashkan Yaghobi" , 
      from_email : form.email , 
      to_email : 'ashkanygh5@gmail.com' , 
      message : form.message , 
     } , 
     'gzZMXY5OO0ZsGfzE-'
     ).then (() => {
      setIsloading(false) ; 
      alert('Thank you . i will get back to you as soon as possible. ');

      setForm({
        name : "" , 
        email : "" , 
        message : ""
      })
     } , (error) => {
      setIsloading(false) , 
      alert("something went wrong !")
      console.log(error);
     })
  };

//Email id =  template_u1epljd 
// services id = service_iuxg1wd 
// Pub key = gzZMXY5OO0ZsGfzE-

  return <>
  
    <div className="xl:mt-12  xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left" , "tween" , 0.2 , 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={`${styles.sectionSubText}`}>Get In Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact .</h3>

        <form ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleCahnge}
            placeholder="Whats Your Name ?" 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none fonr-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="emai" name="email" value={form.email} onChange={handleCahnge}
            placeholder="Whats Your Email ?" 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none fonr-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleCahnge}
            placeholder="Whats Do You Want to Say ? " 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none fonr-medium"/>
          </label>
          <button type="submit" 
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shdow-md shadow-primary rounded-xl ">
            {isloading ? "...sending" : "send"}
          </button>

        </form>

      </motion.div>


      <motion.div variants={slideIn("right" , "tween" , 0.2 , 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  </>;
};

export default SectionWrapper( Contact , "contact");
