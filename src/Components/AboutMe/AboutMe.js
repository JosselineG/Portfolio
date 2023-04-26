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

  

      <div className='container'>

        <div className='skills-LogosL'>

          <motion.div
            viewport={{ once: true, amount: "some" }}
            initial={{ opacity: 0, x: 200 }}

            whileInView={{
              opacity: 1,
              x: -50,
              scale: 1.5,
              transition: { type: "tween", ease: "anticipate", repeatType: "mirror", duration: 3, delay: 0 }
            }}>

            <div>
              <SiJavascript style={{ color: "yellow", width: "40px", height: "40px" }} />
            </div>

          </motion.div>


          <motion.div

            viewport={{ once: true, amount: "some" }}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{
              opacity: 1,
              x: -50,
              scale: 1.5,
              transition: { type: "tween", ease: "anticipate", repeatType: "mirror", duration: 3, delay: 1 }
            }}>


            <div>
              <DiReact style={{ color: "cyan", width: "40px", height: "40px", backgroundColor: "black" }} />
            </div>

          </motion.div>



          <motion.div


            viewport={{ once: true, amount: "some" }}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{
              opacity: 1,
              x: -50,
              scale: 1.5,
              transition: { type: "tween", ease: "anticipate", repeatType: "mirror", duration: 3, delay: 2 }
            }}>

            <div>
              <DiCss3 style={{ color: "blue", width: "50px", height: "50px" }} />
            </div>

          </motion.div>


          <motion.div

            viewport={{ once: true, amount: "some" }}

            initial={{ opacity: 0, x: 200 }}
            whileInView={{
              opacity: 1,
              x: -50,
              scale: 1.5,
              transition: { type: "tween", ease: "anticipate", repeatType: "mirror", duration: 3, delay: 3 }
            }}>

            <div>
              <AiFillHtml5 style={{ color: "orange", width: "50px", height: "50px" }} />
            </div>
          </motion.div>
        </div>

       
          <motion.div
            className='infoAboutMe'
            
            viewport={{ once: true, amount: 0.8 }}
            initial={{ opacity: 0, y: 0 }}

            whileInView={{
              opacity: 1,
              y: -30,
              rotate: -5,
              transition: {
                type: "spring",
                bounce: 0.7,
                duration: 1.3
              }
            }} >

        
              I have a passion for front end development, but with a goal in mind of becoming a
              full stack developer. I have 1+ years of experience developing React web applications.
              Currently, I'm expanding my skills through self-learning of back-end development.
              I am motivated to gain new knowledge, prepared to put my skills to use and be able to
              contribute to the growing field of technology.



          </motion.div>

       


        <div className='skills-LogosR'>

          <motion.div

            viewport={{ once: true, amount: "some" }}

            initial={{ opacity: 0, x: -200 }}
            whileInView={{
              opacity: 1,
              x: 50,
              scale: 1.5,
              transition: { type: "tween", ease: "anticipate",  repeatType: "mirror", duration: 3, delay: 0 }
           
         }}>

            <div>
              <SiMysql style={{ background: "linear-gradient(to right, #00758F, #F29111)", width: "40px", height: "40px" }} />
            </div>
          </motion.div>

          <motion.div

            viewport={{ once: true, amount: "some" }}

            initial={{ opacity: 0, x: -200 }}
            whileInView={{
              opacity: 1,
              x: 50,
              scale: 1.5,
              transition: { type: "tween", ease: "anticipate", repeatType: "mirror", duration: 3, delay: 1 }
            }}>

            <div>
              <FaNodeJs style={{ color: "green", width: "50px", height: "50px" }} />
            </div>
          </motion.div>
          <motion.div

            viewport={{ once: true, amount: "some" }}

            initial={{ opacity: 0, x: -200 }}
            whileInView={{
              opacity: 1,
              x: 50,
              scale: 1.5,
              transition: { type: "tween", ease: "anticipate",  repeatType: "mirror", duration: 3, delay: 2 }
            }}>

            <div>
              <DiGit style={{ color: "#F1502F", width: "50px", height: "50px" }} />
            </div>

          </motion.div>

          <motion.div

            viewport={{ once: true, amount: "some" }}

            initial={{ opacity: 0, x: -200 }}
            whileInView={{
              opacity: 1,
              x: 50,
              scale: 1.5,
              transition: { type: "tween", ease: "anticipate",  repeatType: "mirror", duration: 3, delay: 3 }
            }}>

            <div>
              <AiFillGithub style={{ color: "white", width: "50px", height: "50px" }} />
            </div>

          </motion.div>

        </div>


      </div>
    </div >
  );
}

export default AboutMe;
