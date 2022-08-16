import React from 'react';
import { SiJavascript } from 'react-icons/si';
import './AboutMe.css';
import { DiReact } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";



function AboutMe() {



  return (
    <div className='abt' id="AboutMe">
      

  <h1>About</h1>
   <p> I am a recent graduated student, with a passion for web development. </p>
   <SiJavascript style={{color: "yellow" ,width:"50px", height:"50px"}}/>
   <DiReact style={{color: "cyan" ,width:"50px", height:"50px", backgroundColor:"black"}}/>
    <DiCss3 style={{color: "blue" ,width:"50px", height:"50px"}} />
    <AiFillHtml5 style={{color: "orange" ,width:"50px", height:"50px"}} />
   
   </div>
  );
}

export default AboutMe;
