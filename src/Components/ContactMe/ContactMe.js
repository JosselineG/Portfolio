import React from 'react';
import './ContactMe.css';
import { motion } from "framer-motion"

function ContactMe() {

  return (
    <div className='Contact' id='ContactMe'>

        <motion.div
          className='info'
          viewport={{ once: true, amount: "some" }}
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
          I appreciate you taking the time to view my portfolio.
          If you wish to contact me you can do so by sending an email.
            
        </motion.div>

      <a href="mailto: Josseline.Guardado28@gmail.com?subject= Questions || Greetings">
        Contact</a>

    </div>
  );
}
export default ContactMe;
