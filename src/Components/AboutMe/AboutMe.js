import React from 'react';
import './AboutMe.css';
import { motion } from "framer-motion"

import { SiJavascript } from 'react-icons/si';
import { SiMysql } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiGit } from "react-icons/di"
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { AiFillGithub } from 'react-icons/ai';

function AboutMe() {


  return (
    <div className='abt' id="AboutMe">

      <h1>About</h1>

      <div className='container'>
        <div className='infoAboutMe'>
          <span>


            Recently graduated from Lehman College with a bachelors degree in computer science. I have
            a growing passion for front end development, but with a goal in mind of becoming a full stack developer.
            I want to expand my knowledge and put it into practice.


          </span>
        </div>


        <div className='skills-Logos'>

          <motion.div
            viewport={{ once: true, amount: "some" }}
            initial={{ opacity: 0, x: -100 }}

            whileInView={{
              opacity: 1,
              x: 250,
              scale: 1.5,
              transition: { type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 3, delay: 0 }
            }}>

            <div>
              <SiJavascript style={{ color: "yellow", width: "40px", height: "40px" }} />
            </div>

          </motion.div>


          <motion.div

            viewport={{ once: true, amount: "some" }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: -250,
              scale: 1.5,
              transition: { type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 3, delay: 0 }
            }}>


            <div>
              <DiReact style={{ color: "cyan", width: "40px", height: "40px", backgroundColor: "black" }} />
            </div>

          </motion.div>



          <motion.div


            viewport={{ once: true, amount: "some" }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 250,
              scale: 1.5,
              transition: { type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 3, delay: 1 }
            }}>

            <div>
              <DiCss3 style={{ color: "blue", width: "50px", height: "50px" }} />
            </div>

          </motion.div>


          <motion.div

            viewport={{ once: true, amount: "some" }}

            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: -250,
              scale: 1.5,
              transition: { type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 3, delay: 1 }
            }}>

            <div>
              <AiFillHtml5 style={{ color: "orange", width: "50px", height: "50px" }} />
            </div>
          </motion.div>



          <motion.div

            viewport={{ once: true, amount: "some" }}

            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 250,
              scale: 1.5,
              transition: { type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 3, delay: 2 }
            }}>

            <div>
              <SiMysql style={{ background: "linear-gradient(to right, #00758F, #F29111)", width: "40px", height: "40px" }} />
            </div>
          </motion.div>

          <motion.div

            viewport={{ once: true, amount: "some" }}

            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: -250,
              scale: 1.5,
              transition: { type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 3, delay: 2 }
            }}>

            <div>
              <FaNodeJs style={{ color: "green", width: "50px", height: "50px" }} />
            </div>
          </motion.div>
          <motion.div

            viewport={{ once: true, amount: "some" }}

            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 250,
              scale: 1.5,
              transition: { type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 3, delay: 3 }
            }}>

            <div>
              <DiGit style={{ color: "#F1502F", width: "50px", height: "50px" }} />
            </div>

          </motion.div>

          <motion.div

            viewport={{ once: true, amount: "some" }}

            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: -250,
              scale: 1.5,
              transition: { type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 3, delay: 3 }
            }}>

            <div>
              <AiFillGithub style={{ color: "white", width: "50px", height: "50px" }}/>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default AboutMe;
