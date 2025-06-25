import React from 'react';
import './ContactMe.css';
import { motion } from "framer-motion"

function ContactMe() {

  return (
    <div className='Contact' id='ContactMe'>

        <motion.div
          className='info'
          viewport={{  amount: "some" }}
          initial={{ opacity: 0, y: 200 }}

          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.7,
              duration: 2
            }
          }}>
          Thanks for viewing my portfolio. Feel free to reach out via email. 

      <a href="mailto: josseline.guardado28@gmail.com?subject= Questions || Greetings">
        Email</a>

        </motion.div>

 

    </div>
  );
}
export default ContactMe;
